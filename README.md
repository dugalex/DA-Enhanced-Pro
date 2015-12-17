# DA-Enhanced-Pro
DA-Enhanced-Pro - Free DirectAdmin Skin by dugalex

If installed as "enhanced" skin, it will be automatically updated on DirectAdmin updates and will retain it's original design.
All colors on the top left and right are available. To change a color click on the desired color box. 

![Admin](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-admin.jpg)
![Reseller](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-reseller.jpg)
![User](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-user.jpg)


<b>Installation:</b>

--------------------------------------------------------------------
--- !!!WARNING!!! This will replace the default "enhanced" skin) ---
--------------------------------------------------------------------

cd /usr/local/directadmin/data/skins/  
wget https://github.com/dugalex/DA-Enhanced-Pro/archive/master.zip  
unzip master.zip  
mv DA-Enhanced-Pro-master enhanced  
chown -R diradmin:diradmin enhanced  
rm -rf DA-Enhanced-Pro-master  
rm -f master.zip  
exit  
