// These 3 paramters has been deprecated
//     skip_requesting_account_id  = true
//    skip_get_ec2_platforms      = true
//    skip_metadata_api_check     = true
terraform {
  backend "s3" {
    region           = "us-east-1"
    key              = "terraform.tfstate"
    bucket           = "terraform"
    access_key       = "access_key"
    secret_key       = "secret_key"
    endpoint         = "http://127.0.0.1:9001"
    force_path_style = true

    skip_credentials_validation = true
  }
}

resource "local_file" "foo" {
  content  = "foo"
  filename = "${path.module}/foo.bar"
}

# data "terraform_remote_state" "network" {
#   backend = "s3"


#   config = {
#     bucket = "terraform"
#     key    = "terraform.tfstate"
#     region = "us-east-1"
#   }
# }
# provider "aws" {}

