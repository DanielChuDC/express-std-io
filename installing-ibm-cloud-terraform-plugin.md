[Download and install IBM terraform plugin](https://github.com/IBM-Cloud/terraform-provider-ibm/releases)
- Download the plugin for your workstation OS (Windows/MacOS/Linux)
- Extract the plugin to your local executable directory. Example: `/usr/local/bin/terraform-provider-ibm`
- Update the $HOME/.terraformrc to reference the IBM Provider:
```
providers {
  ibm = "/usr/local/bin/terraform-provider-ibm"
}
```
4. Login to IBM Cloud Infrastructure (SoftLayer) and create an API Username and API Key
5. Rename [terraform_tfvars.sample](terraform_tfvars.sample) file as `terraform.tfvars` and update the input values as needed.  
Refer to [Softlayer API](http://softlayer-python.readthedocs.io/en/latest/cli/vs.html) for `datacenter` and `os_reference` variable.
6. Initialize Terraform to download and update the dependencies
```
terraform init -upgrade
```
7. Review Terraform plan
```
terraform plan
```
8. Apply Terraform template
```
terraform apply
```