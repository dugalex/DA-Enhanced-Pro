# DA-Enhanced-Pro
DA-Enhanced-Pro - Free DirectAdmin Skin by dugalex

If installed as "enhanced" skin, it will be automatically updated on DirectAdmin updates and will retain it's original design.  
All colors on the top left and right are available. To change a color click on the desired color box. 

![Admin](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-admin.jpg)
![Reseller](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-reseller.jpg)
![User](https://github.com/dugalex/DA-Enhanced-Pro/blob/master/images/skin-user.jpg)


#Installation & Update:

!!! WARNING !!! This will change the default "enhanced" skin but will not overwrite any existing DirectAdmin files if they are newer. Use the same command to update.
------------------------------------------------------------------------------------------
```
cd /usr/local/directadmin/data/skins/
wget https://github.com/dugalex/DA-Enhanced-Pro/archive/master.zip
unzip master.zip
\cp -pruf DA-Enhanced-Pro-master/* enhanced
chown -R diradmin:diradmin enhanced
rm -rf DA-Enhanced-Pro-master
rm -f master.zip
exit
```

#!!! OR !!!
  
This will not change the default "enhanced" skin. It will create a new "enhanced-pro" skin.  
------------------------------------------------------------------------------------------
To update when directadmin has been updated, get the latest enhanced.tar.gz skin from  [here](http://forum.directadmin.com/showthread.php?t=221&highlight=latest+enhanced) and install as "enhanced-pro" via Skin Manager at Reseller Level. It will overwrite the default "enhanced" files but not the extra files that make up the skins look.


```
cd /usr/local/directadmin/data/skins/
wget https://github.com/dugalex/DA-Enhanced-Pro/archive/master.zip
unzip master.zip
mv DA-Enhanced-Pro-master enhanced-pro
chown -R diradmin:diradmin enhanced-pro
rm -f master.zip
exit
```

!!! Updating (if saved as enhanced-pro) !!!
------------------------------------------------------------------------------------------
```
cd /usr/local/directadmin/data/skins/
wget https://github.com/dugalex/DA-Enhanced-Pro/archive/master.zip
unzip master.zip
\cp -pruf DA-Enhanced-Pro-master/* enhanced-pro
rm -rf DA-Enhanced-Pro-master
rm -f master.zip
exit
```
