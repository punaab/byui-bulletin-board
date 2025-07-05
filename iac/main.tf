provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "bulletin_board_bucket" {
  bucket = "${var.prefix}-bulletin-board-bucket"
  force_destroy = true
}

resource "aws_instance" "bulletin_board" {
  count         = 3
  ami           = var.ami_id   # Use a public Amazon Linux 2 AMI for your region
  instance_type = "t2.micro"

  tags = {
    Name = "${var.prefix}-bulletin-board-${count.index}"
  }
}