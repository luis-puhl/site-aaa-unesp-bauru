SHORT_DATE=`date +"%Y-%m-%d"`;
LONG_DATE=`date +"%Y-%m-%d %H:%M:%S %z"`;
SRC=".2015-04-10-parceiro.markdown";

for D in `cat ../img/parceiros/parceiros.txt`;
do
	echo "";
	echo "${D}";

	DEST="$SHORT_DATE-parceiro-${D}.markdown";

	echo "copy $SRC to $DEST";
	cp $SRC $DEST;

	echo "replacing tite";
	sed -i.bak "s/<title>/\"${D}\"/g" $DEST;

	echo "replacing date";
	sed -i.bak "s/<date>/${LONG_DATE}/g" $DEST;

	echo "replacing img";
	sed -i.bak "s/img_key/img\/parceiros\/$D\/$D\.png/g" $DEST;
done

rm *.bak