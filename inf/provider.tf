provider "aws" {
    max_retries = 1
    profile = "terraform"
    region = "us-east-1"
    version = "~> 2.52"
}

provider "archive" {
    version = "~> 1.3"
}