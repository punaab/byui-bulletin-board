variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "us-east-1"
}

variable "ami_id" {
  description = "The AMI to use for the EC2 instance"
  type        = string
  default     = "ami-04b70fa74e45c3917"
}

variable "prefix" {
  description = "Prefix for naming resources"
  type        = string
  default     = "punaab"
}
