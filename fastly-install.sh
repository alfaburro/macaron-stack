#!/bin/bash
set -e

url="https://github.com/fastly/cli/releases/download/v10.1.0/fastly_v10.1.0_linux-amd64.tar.gz"
tmp_dir=$(mktemp -d)
tmp_name="fastly-"$(date +"%s")
curl -fsSL $url > "${tmp_dir}/${tmp_name}.tar.gz"
tar -C ${tmp_dir} -xzf "${tmp_dir}/${tmp_name}.tar.gz"
chmod 0755 "${tmp_dir}/fastly"
dir_bin="/usr/bin"
binary="${dir_bin}/fastly"
sudo mv "${tmp_dir}/fastly" "${binary}" 