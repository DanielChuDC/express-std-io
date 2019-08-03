terraform {
  backend "s3" {
    region                      = "us-east-1"
    key                         = "terraform.tfstate"
    bucket                      = "terraform"
    access_key                  = "access_key"
    secret_key                  = "secret_key"
    endpoint                    = "http://127.0.0.1:9001"
    force_path_style            = true
    skip_requesting_account_id  = true
    skip_credentials_validation = true
    skip_get_ec2_platforms      = true
    skip_metadata_api_check     = true
  }
}

resource "local_file" "foo" {
  content  = "foo"
  filename = "${path.module}/foo.bar"
}
