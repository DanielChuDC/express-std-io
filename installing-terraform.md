# How to install terraform

[terraform official website](https://learn.hashicorp.com/terraform/getting-started/install.html)

[terraform release version binary package](https://releases.hashicorp.com/terraform/)

### Using binary package to install terraform
         Linux
         On Linux, you just need to download and place the binary in your $PATH:

         $ wget -q https://releases.hashicorp.com/terraform/0.12.6/terraform_0.12.6_linux_amd64.zip

         $ unzip terraform_0.12.6_linux_amd64.zip
         Archive:  terraform_0.12.6_linux_amd64.zip
         inflating: terraform

         $ sudo mv terraform /usr/local/bin/terraform

         $ terraform version
         Terraform v0.12.6
