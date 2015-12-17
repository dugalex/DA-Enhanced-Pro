# DA-Enhanced-Pro
DA-Enhanced-Pro - Free DirectAdmin Skin by dugalex

If installed as "enhanced" skin, it will be automatically updated on DirectAdmin updates and will retain it's original design.

![Admin](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-admin.jpg)
![Reseller](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-reseller.jpg)
![User](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-user.jpg)


<b>Installation:</b>

--------------------------------------------------------------------
--- !!!WARNING!!! This will replace the default "enhanced" skin) ---
--------------------------------------------------------------------

cd /usr/local/directadmin/data/skins/\n
wget https://github.com/dugalex/DA-Enhanced-Pro/archive/master.zip\n
unzip master.zip\n
mv DA-Enhanced-Pro-master enhanced\n
chown -R diradmin:diradmin enhanced\n
rm -rf DA-Enhanced-Pro-master\n
rm -f master.zip\n
exit\n
