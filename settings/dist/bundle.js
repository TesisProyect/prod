(()=>{"use strict";var e={431:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.cert=n.key=void 0;var i=r(t(17)),o=r(t(147)),a=i.default.resolve(__dirname,"..","cert");n.key=o.default.readFileSync(i.default.resolve(a,"key.pem")),n.cert=o.default.readFileSync(i.default.resolve(a,"cert.pem"))},888:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PoolPG=n.URL_MONGO=void 0;var r=t(900),i={SHELL:"/bin/fish",SESSION_MANAGER:"local/tuf:@/tmp/.ICE-unix/2129,unix/tuf:/tmp/.ICE-unix/2129",COLORTERM:"truecolor",XDG_CONFIG_DIRS:"/home/gt37285/.config/kdedefaults:/etc/xdg",npm_package_main:"index.js",TERM_PROGRAM_VERSION:"1.62.0",APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL:"true",npm_package_dependencies_mongodb:"^4.2.2",NODE:"/usr/bin/node",npm_config_ignore_scripts:"",npm_package_dependencies_moment:"^2.29.1",LC_ADDRESS:"es_EC.UTF-8",LC_NAME:"es_EC.UTF-8",BREAKPAD_DUMP_LOCATION:"/home/gt37285/.config/Code - OSS/exthost Crash Reports",npm_package_devDependencies__types_winston:"^2.4.4",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["build"]}',npm_config_bin_links:"true",DESKTOP_SESSION:"plasma",LC_MONETARY:"es_EC.UTF-8",npm_package_devDependencies_eslint_plugin_promise:"^5.2.0",npm_package_devDependencies__types_express:"^4.17.13",GTK_RC_FILES:"/etc/gtk/gtkrc:/home/gt37285/.gtkrc:/home/gt37285/.config/gtkrc",NO_AT_BRIDGE:"1",XCURSOR_SIZE:"24",EDITOR:"nano",GTK_MODULES:"canberra-gtk-module",XDG_SEAT:"seat0",PWD:"/mnt/data/Code/proyectos/tesis/backend/settings",npm_config_save_prefix:"^",XDG_SESSION_DESKTOP:"plasma",LOGNAME:"gt37285",QT_QPA_PLATFORMTHEME:"qt5ct",npm_package_devDependencies__types_pg:"^8.6.3",XDG_SESSION_TYPE:"x11",npm_package_dependencies_cors:"^2.8.5",npm_package_devDependencies__typescript_eslint_parser:"^5.8.1",SYSTEMD_EXEC_PID:"846",npm_package_scripts_build:"rm -rf ./dist && webpack --config webpack/webpack.config --env env=prod",_:"/mnt/data/Code/proyectos/tesis/backend/settings/node_modules/.bin/webpack",OMF_PATH:"/home/gt37285/.local/share/omf",XAUTHORITY:"/run/user/1000/gdm/Xauthority",npm_package_devDependencies_prettier:"^2.5.1",VSCODE_GIT_ASKPASS_NODE:"/usr/lib/electron13/electron",npm_package_devDependencies_eslint_config_prettier:"^8.3.0",WINDOWPATH:"2",MOTD_SHOWN:"pam",GDM_LANG:"es_EC.UTF-8",npm_package_devDependencies_nodemon_webpack_plugin:"^4.7.0",npm_package_devDependencies__types_cron:"^1.7.3",GTK2_RC_FILES:"/etc/gtk-2.0/gtkrc:/home/gt37285/.gtkrc-2.0:/home/gt37285/.config/gtkrc-2.0",HOME:"/home/gt37285",USERNAME:"gt37285",npm_config_version_git_tag:"true",LC_PAPER:"es_EC.UTF-8",LANG:"es_EC.UTF-8",npm_package_devDependencies_webpack:"^5.65.0",npm_package_devDependencies_typescript:"^4.5.4",LS_COLORS:"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",XDG_CURRENT_DESKTOP:"KDE",npm_config_init_license:"MIT",npm_package_version:"1.0.0",npm_package_devDependencies__types_cors:"^2.8.12",npm_package_devDependencies__typescript_eslint_eslint_plugin:"^5.8.1",npm_config_version_commit_hooks:"true",GIT_ASKPASS:"/usr/lib/code/extensions/git/dist/askpass.sh",npm_package_dependencies_express:"^4.17.2",INIT_CWD:"/mnt/data/Code/proyectos/tesis/backend/settings",CHROME_DESKTOP:"code-oss.desktop",npm_package_devDependencies_eslint_plugin_import:"^2.25.3",npm_package_scripts_format:"prettier --write .",KDE_SESSION_UID:"1000",npm_lifecycle_script:"rm -rf ./dist && webpack --config webpack/webpack.config --env env=prod",npm_config_version_tag_prefix:"v",YARN_WRAP_OUTPUT:"false",npm_package_devDependencies_ts_loader:"^9.2.6",XDG_SESSION_CLASS:"user",TERM:"xterm-256color",LC_IDENTIFICATION:"es_EC.UTF-8",npm_package_name:"settings",USER:"gt37285",npm_package_devDependencies_webpack_merge:"^5.8.0",npm_package_dependencies_pg:"^8.7.1",npm_package_devDependencies_webpack_cli:"^4.9.1",VSCODE_GIT_IPC_HANDLE:"/run/user/1000/vscode-git-985bcffc08.sock",npm_package_devDependencies_eslint_plugin_node:"^11.1.0",KDE_SESSION_VERSION:"5",npm_package_devDependencies_webpack_dev_server:"^4.7.2",npm_package_devDependencies_stylelint_config_prettier:"^9.0.3",npm_package_dependencies_dotenv:"^10.0.0",DISPLAY:":0",npm_lifecycle_event:"build",SHLVL:"2",npm_config_version_git_sign:"",npm_config_version_git_message:"v%s",npm_package_devDependencies_eslint_webpack_plugin:"^3.1.1",npm_package_devDependencies_eslint:"^7.32.0",LC_TELEPHONE:"es_EC.UTF-8",LC_MEASUREMENT:"es_EC.UTF-8",XDG_VTNR:"2",XDG_SESSION_ID:"7",npm_config_user_agent:"yarn/1.22.17 npm/? node/v17.3.0 linux x64",npm_package_scripts_lint:"eslint --fix .",npm_execpath:"/usr/lib/node_modules/yarn/bin/yarn.js",npm_package_dependencies_winston:"^3.3.3",npm_package_devDependencies_eslint_config_standard:"^16.0.3",XDG_RUNTIME_DIR:"/run/user/1000",npm_package_dependencies_cron:"^1.8.2",npm_config_strict_ssl:"true",npm_package_dependencies_helmet:"^4.6.0",LC_TIME:"es_EC.UTF-8",npm_package_scripts_dev:"webpack --config webpack/webpack.config --env env=dev",VSCODE_GIT_ASKPASS_MAIN:"/usr/lib/code/extensions/git/dist/askpass-main.js",QT_AUTO_SCREEN_SCALE_FACTOR:"0",XCURSOR_THEME:"capitaine-light",GDK_BACKEND:"x11",KDE_FULL_SESSION:"true",npm_package_devDependencies_webpack_node_externals:"^3.0.0",npm_package_scripts_start:"node ./dist/bundle.js",BROWSER:"firefox",PATH:"/tmp/yarn--1642368381937-0.0016609303597603375:/mnt/data/Code/proyectos/tesis/backend/settings/node_modules/.bin:/home/gt37285/.config/yarn/link/node_modules/.bin:/home/gt37285/.yarn/bin:/usr/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/lib/node_modules/npm/bin/node-gyp-bin:/usr/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl",GDMSESSION:"plasma",ORIGINAL_XDG_CURRENT_DESKTOP:"KDE",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus",npm_package_license:"MIT",KDE_APPLICATIONS_AS_SCOPE:"1",MAIL:"/var/spool/mail/gt37285",npm_config_registry:"https://registry.yarnpkg.com",npm_config_ignore_optional:"",OMF_CONFIG:"/home/gt37285/.config/omf",npm_node_execpath:"/usr/bin/node",LC_NUMERIC:"es_EC.UTF-8",TERM_PROGRAM:"vscode",npm_config_init_version:"1.0.0",PORT:"443",TZ:"America/Guayaquil",crono_users:"0 2 1 * *",MONGO_DB_NAME:"authDB",MONGO_DB_USER:"adminUsb",MONGO_DB_PASSWORD:"ov1KyRaOlKKU3z77",MONGO_DB_PORT:"",MONGO_DB_HOST:"cluster0.cbr4m.mongodb.net",PG_DB_HOST:"ierec-test.ck2swchd02ym.us-east-2.rds.amazonaws.com",PG_DB_USER:"postgres",PG_DB_PASSWORD:"Lp3lkjkszpj",PG_DB_NAME:"ierectest",PG_DB_PORT:"5432"},o=i.NODE_ENV,a=i.MONGO_DB_HOST,s=i.MONGO_DB_PORT,_=i.MONGO_DB_NAME,c=i.MONGO_DB_USER,p=i.MONGO_DB_PASSWORD,u=i.PG_DB_HOST,l=i.PG_DB_USER,d=i.PG_DB_PASSWORD,m=i.PG_DB_NAME,g=i.PG_DB_PORT;n.URL_MONGO=function(){return"production"===o?"mongodb+srv://".concat(String(c),":").concat(String(p),"@").concat(String(a),"/").concat(String(_)):"mongodb://".concat(String(a),":").concat(String(s),"/").concat(String(_))},n.PoolPG=new r.Pool({host:String(u),user:String(l),password:String(d),database:String(m),port:Number(g),max:20,idleTimeoutMillis:3e4,connectionTimeoutMillis:2e3})},50:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=t(773),o=t(17),a=t(147),s=i.format.colorize,_=i.format.combine,c=i.format.printf,p=r(t(853)),u=(0,o.resolve)(__dirname,"../logs");(0,a.existsSync)(u)||(0,a.mkdirSync)(u),n.default=(0,i.createLogger)({level:"debug",transports:[new i.transports.Console({format:_(s({level:!0}),c((function(e){var n=e.level,t=e.message;return"[".concat(n,"]: ").concat(t," -- ").concat((0,p.default)(new Date).format("dddd, DD/MM/YYYY, HH:mm:ss"))})))}),new i.transports.File({filename:"".concat(u,"/debugger.log"),format:c((function(e){var n=e.level,t=e.message;return"[".concat(n,"]: ").concat(t," -- ").concat((0,p.default)(new Date).format("dddd, DD/MM/YYYY, HH:mm:ss"))}))})]})},672:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{_(r.next(e))}catch(e){o(e)}}function s(e){try{_(r.throw(e))}catch(e){o(e)}}function _(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}_((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.Disconnect=n.Connect=void 0;var o=t(888),a=t(13);n.Connect=function(){return r(void 0,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,a.MongoClient.connect((0,o.URL_MONGO)())];case 1:return[2,e.sent()]}}))}))},n.Disconnect=function(){}},105:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){var r=500;return e.status&&(r=e.status),t.status(r).json(e)}},853:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(245));i.default.locale("es"),n.default=i.default},607:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i,o=r(t(557)),a=r(t(897));i=Number("443"),o.default.init(i||4004).ServerSSL(),a.default.deleteUsers()},479:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(274)),o=r(t(416));n.default=[i.default.routes(),o.default.routes()]},274:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});var r=t(860),i=t(752),o=function(){function e(){}return e.routes=function(){var e=(0,r.Router)();return e.route("/logs/:typeServ").get(i.getLogs),e},e}();n.default=o},416:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});var r=t(860),i=t(253),o=function(){function e(){}return e.routes=function(){var e=(0,r.Router)();return e.route("/policies/:typePolicy").get(i.getDocPolicies),e},e}();n.default=o},557:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(860)),o=r(t(806)),a=r(t(582)),s=r(t(687)),_=t(431),c=r(t(479)),p=function(){function e(e){var n=this;this.middleWares=function(){n.app.use((0,o.default)()),n.app.use((0,a.default)({origin:function(e,t){e&&-1!==n.whitelist.indexOf(e)||!e?t(null,!0):t(new Error("Acceso a ".concat(e," no permitido por el cors")))}})),n.app.use("/api/v1",c.default)},this.app=(0,i.default)(),this.middleWares(),this.whitelist=["localhost","breinertech.me","www.breinertech.me"],this.port=e}return e.init=function(n){return new e(n)},e.prototype.ServerSSL=function(e){var n=this;return s.default.createServer({cert:_.cert,key:_.key},this.app).listen(this.port,e||function(){return console.log("listening setting server on port "+n.port)})},e}();n.default=p},897:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var i=r(t(857)),o=t(440),a=i.default.CronJob,s=function(){function e(){}return e.deleteUsers=function(){try{var e={SHELL:"/bin/fish",SESSION_MANAGER:"local/tuf:@/tmp/.ICE-unix/2129,unix/tuf:/tmp/.ICE-unix/2129",COLORTERM:"truecolor",XDG_CONFIG_DIRS:"/home/gt37285/.config/kdedefaults:/etc/xdg",npm_package_main:"index.js",TERM_PROGRAM_VERSION:"1.62.0",APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL:"true",npm_package_dependencies_mongodb:"^4.2.2",NODE:"/usr/bin/node",npm_config_ignore_scripts:"",npm_package_dependencies_moment:"^2.29.1",LC_ADDRESS:"es_EC.UTF-8",LC_NAME:"es_EC.UTF-8",BREAKPAD_DUMP_LOCATION:"/home/gt37285/.config/Code - OSS/exthost Crash Reports",npm_package_devDependencies__types_winston:"^2.4.4",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["build"]}',npm_config_bin_links:"true",DESKTOP_SESSION:"plasma",LC_MONETARY:"es_EC.UTF-8",npm_package_devDependencies_eslint_plugin_promise:"^5.2.0",npm_package_devDependencies__types_express:"^4.17.13",GTK_RC_FILES:"/etc/gtk/gtkrc:/home/gt37285/.gtkrc:/home/gt37285/.config/gtkrc",NO_AT_BRIDGE:"1",XCURSOR_SIZE:"24",EDITOR:"nano",GTK_MODULES:"canberra-gtk-module",XDG_SEAT:"seat0",PWD:"/mnt/data/Code/proyectos/tesis/backend/settings",npm_config_save_prefix:"^",XDG_SESSION_DESKTOP:"plasma",LOGNAME:"gt37285",QT_QPA_PLATFORMTHEME:"qt5ct",npm_package_devDependencies__types_pg:"^8.6.3",XDG_SESSION_TYPE:"x11",npm_package_dependencies_cors:"^2.8.5",npm_package_devDependencies__typescript_eslint_parser:"^5.8.1",SYSTEMD_EXEC_PID:"846",npm_package_scripts_build:"rm -rf ./dist && webpack --config webpack/webpack.config --env env=prod",_:"/mnt/data/Code/proyectos/tesis/backend/settings/node_modules/.bin/webpack",OMF_PATH:"/home/gt37285/.local/share/omf",XAUTHORITY:"/run/user/1000/gdm/Xauthority",npm_package_devDependencies_prettier:"^2.5.1",VSCODE_GIT_ASKPASS_NODE:"/usr/lib/electron13/electron",npm_package_devDependencies_eslint_config_prettier:"^8.3.0",WINDOWPATH:"2",MOTD_SHOWN:"pam",GDM_LANG:"es_EC.UTF-8",npm_package_devDependencies_nodemon_webpack_plugin:"^4.7.0",npm_package_devDependencies__types_cron:"^1.7.3",GTK2_RC_FILES:"/etc/gtk-2.0/gtkrc:/home/gt37285/.gtkrc-2.0:/home/gt37285/.config/gtkrc-2.0",HOME:"/home/gt37285",USERNAME:"gt37285",npm_config_version_git_tag:"true",LC_PAPER:"es_EC.UTF-8",LANG:"es_EC.UTF-8",npm_package_devDependencies_webpack:"^5.65.0",npm_package_devDependencies_typescript:"^4.5.4",LS_COLORS:"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:",XDG_CURRENT_DESKTOP:"KDE",npm_config_init_license:"MIT",npm_package_version:"1.0.0",npm_package_devDependencies__types_cors:"^2.8.12",npm_package_devDependencies__typescript_eslint_eslint_plugin:"^5.8.1",npm_config_version_commit_hooks:"true",GIT_ASKPASS:"/usr/lib/code/extensions/git/dist/askpass.sh",npm_package_dependencies_express:"^4.17.2",INIT_CWD:"/mnt/data/Code/proyectos/tesis/backend/settings",CHROME_DESKTOP:"code-oss.desktop",npm_package_devDependencies_eslint_plugin_import:"^2.25.3",npm_package_scripts_format:"prettier --write .",KDE_SESSION_UID:"1000",npm_lifecycle_script:"rm -rf ./dist && webpack --config webpack/webpack.config --env env=prod",npm_config_version_tag_prefix:"v",YARN_WRAP_OUTPUT:"false",npm_package_devDependencies_ts_loader:"^9.2.6",XDG_SESSION_CLASS:"user",TERM:"xterm-256color",LC_IDENTIFICATION:"es_EC.UTF-8",npm_package_name:"settings",USER:"gt37285",npm_package_devDependencies_webpack_merge:"^5.8.0",npm_package_dependencies_pg:"^8.7.1",npm_package_devDependencies_webpack_cli:"^4.9.1",VSCODE_GIT_IPC_HANDLE:"/run/user/1000/vscode-git-985bcffc08.sock",npm_package_devDependencies_eslint_plugin_node:"^11.1.0",KDE_SESSION_VERSION:"5",npm_package_devDependencies_webpack_dev_server:"^4.7.2",npm_package_devDependencies_stylelint_config_prettier:"^9.0.3",npm_package_dependencies_dotenv:"^10.0.0",DISPLAY:":0",npm_lifecycle_event:"build",SHLVL:"2",npm_config_version_git_sign:"",npm_config_version_git_message:"v%s",npm_package_devDependencies_eslint_webpack_plugin:"^3.1.1",npm_package_devDependencies_eslint:"^7.32.0",LC_TELEPHONE:"es_EC.UTF-8",LC_MEASUREMENT:"es_EC.UTF-8",XDG_VTNR:"2",XDG_SESSION_ID:"7",npm_config_user_agent:"yarn/1.22.17 npm/? node/v17.3.0 linux x64",npm_package_scripts_lint:"eslint --fix .",npm_execpath:"/usr/lib/node_modules/yarn/bin/yarn.js",npm_package_dependencies_winston:"^3.3.3",npm_package_devDependencies_eslint_config_standard:"^16.0.3",XDG_RUNTIME_DIR:"/run/user/1000",npm_package_dependencies_cron:"^1.8.2",npm_config_strict_ssl:"true",npm_package_dependencies_helmet:"^4.6.0",LC_TIME:"es_EC.UTF-8",npm_package_scripts_dev:"webpack --config webpack/webpack.config --env env=dev",VSCODE_GIT_ASKPASS_MAIN:"/usr/lib/code/extensions/git/dist/askpass-main.js",QT_AUTO_SCREEN_SCALE_FACTOR:"0",XCURSOR_THEME:"capitaine-light",GDK_BACKEND:"x11",KDE_FULL_SESSION:"true",npm_package_devDependencies_webpack_node_externals:"^3.0.0",npm_package_scripts_start:"node ./dist/bundle.js",BROWSER:"firefox",PATH:"/tmp/yarn--1642368381937-0.0016609303597603375:/mnt/data/Code/proyectos/tesis/backend/settings/node_modules/.bin:/home/gt37285/.config/yarn/link/node_modules/.bin:/home/gt37285/.yarn/bin:/usr/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/lib/node_modules/npm/bin/node-gyp-bin:/usr/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl",GDMSESSION:"plasma",ORIGINAL_XDG_CURRENT_DESKTOP:"KDE",DBUS_SESSION_BUS_ADDRESS:"unix:path=/run/user/1000/bus",npm_package_license:"MIT",KDE_APPLICATIONS_AS_SCOPE:"1",MAIL:"/var/spool/mail/gt37285",npm_config_registry:"https://registry.yarnpkg.com",npm_config_ignore_optional:"",OMF_CONFIG:"/home/gt37285/.config/omf",npm_node_execpath:"/usr/bin/node",LC_NUMERIC:"es_EC.UTF-8",TERM_PROGRAM:"vscode",npm_config_init_version:"1.0.0",PORT:"443",TZ:"America/Guayaquil",crono_users:"0 2 1 * *",MONGO_DB_NAME:"authDB",MONGO_DB_USER:"adminUsb",MONGO_DB_PASSWORD:"ov1KyRaOlKKU3z77",MONGO_DB_PORT:"",MONGO_DB_HOST:"cluster0.cbr4m.mongodb.net",PG_DB_HOST:"ierec-test.ck2swchd02ym.us-east-2.rds.amazonaws.com",PG_DB_USER:"postgres",PG_DB_PASSWORD:"Lp3lkjkszpj",PG_DB_NAME:"ierectest",PG_DB_PORT:"5432"},n=e.TZ,t=e.crono_users;if(!n)throw new Error("No existe una configuración de región");if(!t)return;return new a(t.trim(),(function(){(0,o.deleteUsersMongo)(String("authDB"))}),null,!0,n).start()}catch(e){throw e}},e}();n.default=s},752:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{_(r.next(e))}catch(e){o(e)}}function s(e){try{_(r.throw(e))}catch(e){o(e)}}function _(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}_((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.getLogs=void 0;var a=o(t(105)),s=o(t(147)),_=o(t(17));n.getLogs=function(e,n){return r(void 0,void 0,void 0,(function(){var t,r,o,c,p;return i(this,(function(i){try{if(t=e.params.typeServ,r=e.query.typeLog,o=["auth","courses","nginx"],t&&!o.includes(t))throw{status:400,msg:"Tipo de archivo log no valido",valid:o};if(!r)throw{status:404,msg:"Debes especificar el tipo de archivo al que deseas acceder"};if(!(c=_.default.resolve(__dirname,"..","logs"))||c&&!s.default.lstatSync(c).isDirectory())throw{status:404,msg:"La ruta especificada no corresponde a un directorio, contacta con un administrador",path:_.default||""};if(p=_.default.resolve(c,t,"".concat(r,".log")),!s.default.existsSync(p))throw{status:404,msg:"No se ha encontrado el archivo solicitado, por favor, contacta un administrador"};return[2,n.sendFile(p)]}catch(t){return[2,(0,a.default)(t,e,n)]}return[2]}))}))}},253:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{_(r.next(e))}catch(e){o(e)}}function s(e){try{_(r.throw(e))}catch(e){o(e)}}function _(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}_((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.getDocPolicies=void 0;var a=o(t(105)),s=o(t(147)),_=o(t(17));n.getDocPolicies=function(e,n){return r(void 0,void 0,void 0,(function(){var t,r,o;return i(this,(function(i){try{if(t=e.params.typePolicy,!(r=_.default.resolve(__dirname,"..","docs"))||r&&!s.default.lstatSync(r).isDirectory())throw{status:404,msg:"La ruta especificada no corresponde a un directorio, contacta con un administrador",path:_.default||""};if(o=_.default.resolve(r,t),!s.default.existsSync(o))throw{status:404,msg:"No se ha encontrado el archivo solicitado, por favor, contacta un administrador"};return[2,n.sendFile(o)]}catch(t){return[2,(0,a.default)(t,e,n)]}return[2]}))}))}},440:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{_(r.next(e))}catch(e){o(e)}}function s(e){try{_(r.throw(e))}catch(e){o(e)}}function _(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}_((r=r.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.deleteUsersMongo=void 0;var a=t(672),s=t(888),_=t(54),c=o(t(50)),p=function(e,n){return s.PoolPG.query(e,n&&n).catch((function(e){throw{status:500,msg:e.message}}))};n.deleteUsersMongo=function(e){return r(void 0,void 0,void 0,(function(){var n,t,r,o,s,u;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),n="users",[4,p("\n            delete\n            from estudiante\n            where _id not in (\n                select distinct estudiante\n                from factura\n                where estado='pagado'\n            )\n            returning *\n        ")];case 1:return t=i.sent().rows,(r=t.map((function(e){return new _.ObjectId(e._id)}))).length<=0?[2,c.default.warn("No se han eliminado usuarios")]:[4,(0,a.Connect)()];case 2:return o=i.sent(),s=o.db(e),[4,new Promise((function(e,t){s.collection(n).find({_id:{$in:r},$and:[{roles:{$eq:"user"}}]},{projection:{name:1,lastname:1,username:1}}).toArray((function(n,r){return n?t(n):e(r)}))})).catch((function(e){throw c.default.error(e),{status:400,e}}))];case 3:return u=i.sent(),c.default.info("Eliminando usuarios: -> ".concat(JSON.stringify(u))),s.collection(n).deleteMany({_id:{$in:r}}).then((function(){o.close()})).catch((function(e){throw c.default.error(e),{e}})),[3,5];case 4:throw i.sent();case 5:return[2]}}))}))}},54:e=>{e.exports=require("bson")},582:e=>{e.exports=require("cors")},857:e=>{e.exports=require("cron")},860:e=>{e.exports=require("express")},806:e=>{e.exports=require("helmet")},245:e=>{e.exports=require("moment")},13:e=>{e.exports=require("mongodb")},900:e=>{e.exports=require("pg")},773:e=>{e.exports=require("winston")},147:e=>{e.exports=require("fs")},687:e=>{e.exports=require("https")},17:e=>{e.exports=require("path")}},n={};!function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}(607)})();