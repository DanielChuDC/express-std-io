# Why store terraform state into minio

To prevent the state file lost when the pods is mortal

### [Remote State](https://www.terraform.io/docs/state/remote.html)

By default, Terraform stores state locally in a file named terraform.tfstate. When working with Terraform in a team, use of a local file makes Terraform usage complicated because each user must make sure they always have the latest state data before running Terraform and make sure that nobody else runs Terraform at the same time.

With remote state, Terraform writes the state data to a remote data store, which can then be shared between all members of a team. Terraform supports storing state in Terraform Enterprise, HashiCorp Consul, Amazon S3, and more.

Remote state is a feature of backends. Configuring and using remote backends is easy and you can get started with remote state quickly. If you then want to migrate back to using local state, backends make that easy as well.

### How to achieve store remote file into minio

[Official terraform backend storage support S3 page](https://www.terraform.io/docs/backends/types/s3.html)

[Solution of other S3 storage from github issue](https://github.com/hashicorp/terraform/pull/15553#issuecomment-334724247)
https://github.com/hashicorp/terraform/pull/14096

@radeksimko would be sweet to have this merged.
How to test

start minio server and create bucket:

$ docker run -d -e MINIO_ACCESS_KEY=covfefe -e MINIO_SECRET_KEY=cov-fe-fe -p 9000:9000 minio/minio server /export
$ docker run --net=host -it --rm --entrypoint=/bin/sh minio/mc -c "mc config host add minio http://127.0.0.1:9000 covfefe cov-fe-fe S3v4 && mc mb minio/covfefe-infra"

create test.tf:

```terraform
terraform {
  backend "s3" {
    region     = "us-east-1"
    key        = "/test.tfstate"
    bucket     = "covfefe-infra"
    access_key = "covfefe"
    secret_key = "cov-fe-fe"
    endpoint   = "http://127.0.0.1:9000"
    s3_force_path_style = "true"
    skip_creds_validation = "true"
  }
}


resource "local_file" "foo" {
    content     = "foo"
    filename = "${path.module}/foo.bar"
}
```

@lfarnell I have used IBM Cloud Object Storage https://www.ibm.com/cloud-computing/bluemix/cloud-object-storage, it works well with the following configuration:

```terraform
terraform {
  backend "s3" {
    endpoint = "http://s3.eu-geo.objectstorage.softlayer.net"
    region = "us-west-1" # Basically this gets ignored.
    profile = "cos-profile"
    bucket = "remote-state"
    key = "terraform"
    skip_requesting_account_id = true
    skip_credentials_validation = true
    skip_get_ec2_platforms = true
    skip_metadata_api_check = true
  }
}
```

This works because the endpoint decides which region are you using.

To be honest I haven't tried with anything else.
