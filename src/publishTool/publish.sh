echo "start ------->>>>"
if [ ! -d “../../build” ]; then
   mkdir -p ../../build
fi

if [ -d “../../bin/tsc/layaAir” ]; then
   rmdir -p ../../bin/tsc/layaAir
fi
 
node index.js

cd ../

gulp build

echo "end ------->>>>"
