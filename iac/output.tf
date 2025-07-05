output "s3_bucket" {
  value = aws_s3_bucket.bulletin_board_bucket.bucket
}

output "instance_ids" {
  value = aws_instance.bulletin_board[*].id
}
