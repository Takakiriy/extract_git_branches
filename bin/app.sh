
# chmod +x app.sh
export  script_file_path="$0"
export  parent_path="${script_file_path%/*}"
cd  "${parent_path}"
export  NODE_PATH=/opt/node/lib/node_modules

node  ~/Downloads/app-master/build/app.js $*