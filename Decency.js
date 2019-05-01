/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/



/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


var Toast = android.widget.Toast;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var LinearLayout = android.widget.LinearLayout;
var GUI;
var dialog;
var tick1 = 0;
var search;
var Launcher = {
	isBlockLauncher: function () {
		return(ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
	},
	isToolbox: function () {
		return ctx.getPackageName() == "io.mrarm.mctoolbox";
	}
};
var GUI;
var GUI5;
var now = new Date();
var aboard;
var tick1 = 0;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var File = java.io.File;
var System = java.lang.System;
var Thread = java.lang.Thread;
var SystemClock = android.os.SystemClock;
var PendingIntent = android.app.PendingIntent;
var FileReader = java.io.FileReader; 
var BufferedReader = java.io.BufferedReader; 
var FOS = java.io.FileOutputStream; 
var String = java.lang.String; 
var StringBuilder = java.lang.StringBuilder; 
var FileInputStream = java.io.FileInputStream;
var InputStreamReader = java.io.InputStreamReader;
var MediaPlayer = android.media.MediaPlayer();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri;
var x = Math.floor(getPlayerX());
var y = Math.floor(getPlayerY());
var z = Math.floor(getPlayerZ());
let Serrte = new android.graphics.drawable.GradientDrawable();
Serrte.setColor(android.graphics.Color.argb(120, 0, 0, 0));
Serrte.setStroke(dip2px(2), android.graphics.Color.WHITE); 
var Decency = {
	mods: new Array(),
	commands: new Array(),
	isDev: true,
	lightMode: true,
	ghostMode: false,
	enableOpenGL: true,
	enableTimings: true
};
var Timings = {
	processing: new org.json.JSONObject(),
	timingData: new org.json.JSONObject(),
	startTiming: function (funcName) {
		this.processing.put(funcName, java.lang.System.currentTimeMillis());
	},
	stopTiming: function (funcName) {
		this.timingData.put(funcName, java.lang.System.currentTimeMillis() - this.processing.optLong(funcName, -1));
	},
	getTimingData: function () {
		return this.timingData;
	},
	resetTiming: function (funcName) {
		this.timingData.put(funcName, 0);
	}
};

var CommandManager = {
	cmdModules: new Array(),
	cmdNames: new Array(),
	onCommand: function (cmd) {
		cmd = cmd.split(" ");
		var command = cmd.shift().toLowerCase();
		var args = cmd;
		var module = null;
		var found = false;
		this.cmdNames.forEach(function (entry, index) {
			if(found == false) {
				entry.forEach(function (entry2) {
					if(entry2.toLowerCase() == command) {
						found = true;
						module = CommandManager.cmdModules[index];

					}
				});
			}
		});
		if(module != null)
			module.onCall(args);
		else
			Decency.cmessage("Command \"" + command + "\" not found");
	},
	registerCommand: function (module) {
		this.cmdModules.push(module);
		this.cmdNames.push(module.alias);
	}
};

var enabledGradient = new android.graphics.drawable.GradientDrawable();
enabledGradient.setColor(android.graphics.Color.argb(150, 0, 200, 0));
enabledGradient.setStroke(dip2px(2), android.graphics.Color.BLACK);
enabledGradient.setCornerRadius(0);
var disabledGradient = new android.graphics.drawable.GradientDrawable();
disabledGradient.setColor(android.graphics.Color.argb(130, 200, 0, 0));
disabledGradient.setStroke(dip2px(2), android.graphics.Color.BLACK);
disabledGradient.setCornerRadius(0);

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/


var lc = {
	en_US: 1,
	de_DE: 2
};
var ModuleType = {
	mod: 1,
	special: 2,
	command: 3,
	cmd: 3,
	toName: function (type) {
		switch(type) {
		case ModuleType.mod:
			return Decency.getLString("moduletype.mod");
			break;
		case ModuleType.special:
			return Decency.getLString("moduletype.special");
			break;
		case ModuleType.command:
			return Decency.getLString("moduletype.command");
			break;
		default:
			return "unknown";
		}
	}
};
var ModCategory = {
	MOVE: 1,
	COMBAT: 2,
	RENDER: 3,
	MISC: 4,
	PLAYER: 5,
	BIND: 7,
	SPECIAL: 6,
	toName: function (c) {
		switch(c) {
		case 1:
			return "Move";
		case 2:
			return "Combat";
		case 3:
			return "Render";
		case 4:
			return "Misc";
		case 5:
			return "Player";
		case 6:
			return "Settings";
		case 7:
			return "Bind";
		default:
			return "UNKNOWN(" + c + ")";
		}
	}
};
var l = new Array();
l.push(new Array()); //Codes
l.push(new Array()); //English
l.push(new Array()); //German
var l = new Array();
l.push(new Array()); //Codes
l.push(new Array()); //English
l.push(new Array()); //German
//Multi Language Support
var BypassMode = {
	DEFAULT: 0,
	LBSG: 1,
	MINIBOX: 2
};
var SpeedMode = {
	DEFAULT: 0,
	BHOP: 1,
	LONGJUMP: 2
};
var getStyledBtnBackground = function (state, toggleable) {
	let bg = android.graphics.drawable.GradientDrawable();
	bg.setCornerRadius(1);
	bg.setColor(android.graphics.Color.argb(80, 0, 0, 0));
	if(state) bg.setColor(android.graphics.Color.argb(210, 0, 200, 0));
	if(toggleable == false) bg.setColor(android.graphics.Color.argb(210, 230, 150, 30));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.argb(230, 0, 0, 0));
};


var show = {
test: "Test",
MenuBtn: android.text.Html.fromHtml('<b><font color="blue">D</font></b><b><font color="white">ecency</font></b>'),
}

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

var enabledGradient1 = new android.graphics.drawable.GradientDrawable();
enabledGradient.setColor(android.graphics.Color.argb(80, 0, 0, 0));
enabledGradient.setStroke(2, android.graphics.Color.BLACK);
enabledGradient.setCornerRadius(0);
var disabledGradient1 = new android.graphics.drawable.GradientDrawable();
disabledGradient.setColor(android.graphics.Color.GREEN);
disabledGradient.setStroke(2, android.graphics.Color.GREEN);
disabledGradient.setCornerRadius(0);
Decency.getStyledBackground1 = function () {
	let bg = new android.graphics.drawable.GradientDrawable();
	bg.setCornerRadius(0);
	bg.setColor(android.graphics.Color.argb(120, 0, 0, 0));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(2, android.graphics.Color.WHITE);
	return bg;
}
Decency.getStyledBtnBackground1 = function (state, toggleable) {
	let bg = android.graphics.drawable.GradientDrawable();
	bg.setCornerRadius(0);
	if(state) bg.setStroke(2, android.graphics.Color.GREEN);
	if(toggleable == false) bg.setStroke(2, android.graphics.Color.argb(120, 0, 0, 0));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(2, android.graphics.Color.argb(120, 0, 0, 0));
	return bg;
}






var Themes = {
	DEFAULT: {
		
		ModButton: {

			Neutral: {
				textColor: android.graphics.Color.BLACK,
				background: getStyledBtnBackground(false, false)
			},
			Activated: {
				textColor: android.graphics.Color.BLACK,
				background: getStyledBtnBackground(true, true)
			},
			Deactivated: {
				textColor: android.graphics.Color.BLACK,
				background: getStyledBtnBackground(false, true)
			}
		}

	}
};
var Utils = {
	bypassMode: BypassMode.DEFAULT,
	speedMode: SpeedMode.DEFAULT,
	online: false,
	flyTick: 0,
	modsCount: 0,
	currentSearchCount: 0,
    Url: {
		getUrlContents: function (url, result) {
			let t = new java.lang.Thread(new java.lang.Runnable({
				run: function () {
					try {
						let u = new java.net.URL(url);
						let allCont = new java.lang.StringBuilder();
						let con = u.openConnection();
						con.setIfModifiedSince(0);
						con.setRequestProperty("User-Agent", "Mozilla/5.0");
						con.setRequestProperty("Accept-Encoding", "UTF-8");
						let reader = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream(), "UTF-8"));
						let line = "";
						while((line = reader.readLine()) != null)
							allCont.append(line + "\n");
						reader.close();
						result(allCont.toString(), null);
					} catch(e) {
						Decency.ctoast(e);
						result(null, e);
					}
				}
			}));
			t.start();
		}
	},
	Render: {

		getFloatBuffer: function (fArray) {
			var bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
			bBuffer.order(java.nio.ByteOrder.nativeOrder());

			var fBuffer = bBuffer.asFloatBuffer();
			fBuffer.put(fArray);
			fBuffer.position(0);
			return fBuffer;
		},
		getShortBuffer: function (sArray) {
			var bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
			bBuffer.order(java.nio.ByteOrder.nativeOrder());

			var sBuffer = bBuffer.asShortBuffer();
			sBuffer.put(sArray);
			sBuffer.position(0);
			return sBuffer;
		},
		renderer: null,
		glSurface: null,
		fov: 60,
		initted: false,
		init: function () {
			var options = Utils.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));

			options = options.split("\n");
			options.forEach(function (entry) {
				var suboption = entry.split(":");
				if(suboption[0] == "gfx_field_of_view") {
					Utils.Render.fov = suboption[1];

				}
			});
			this.renderer = new android.opengl.GLSurfaceView.Renderer({
				onSurfaceCreated: function (gl, config) {
					var GL10 = javax.microedition.khronos.opengles.GL10;
					gl.glClearColor(0, 0, 0, 0);
					gl.glShadeModel(GL10.GL_SMOOTH);
					gl.glClearDepthf(1.0);
					gl.glEnable(GL10.GL_DEPTH_TEST);
					gl.glDepthFunc(GL10.GL_LEQUAL);
					gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
					//simpleToast("created");
				},
				onSurfaceChanged: function (gl, width, height) {
					//simpleToast("Changing...");
					var GL10 = javax.microedition.khronos.opengles.GL10;
					gl.glMatrixMode(GL10.GL_PROJECTION);
					gl.glLoadIdentity();
					android.opengl.GLU.gluPerspective(gl, Utils.Render.fov, width / height, 0.1, 100);
					gl.glMatrixMode(GL10.GL_MODELVIEW);
					gl.glLoadIdentity();
					//simpleToast("changed");
				},
				onDrawFrame: function (gl) {
					//simpleToast("Drawing...");
					var GL10 = javax.microedition.khronos.opengles.GL10;
					gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
					gl.glLoadIdentity();
					gl.glDisable(GL10.GL_LIGHTING);
					if(playerESP.state || tracers.state) {
						try{
							var yaw = getYaw() % 360;
							var pitch = getPitch() % 360;
							var eyeX = getPlayerX();
							var eyeY = getPlayerY() + 1;
							var eyeZ = getPlayerZ();

							var dCenterX = Math.sin(yaw / 180 * Math.PI);
							var dCenterZ = Math.cos(yaw / 180 * Math.PI);
							var dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);

							var centerX = eyeX - dCenterX;
							var centerZ = eyeZ + dCenterZ;
							var centerY = eyeY - dCenterY;

							android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);

							Decency.mods.forEach(function (entry, index, array) {
								try {
									entry.onRender(gl);
									//gl.glTranslatef(0,0,0);
								} catch(e) {}
							});
						}catch(e){
							simpleToast("RenderProblem: "+e);
						}
						
					}
				}
			});
			ctx.runOnUiThread(new java.lang.Runnable( {
				run: function () {
					Utils.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
					Utils.Render.glSurface.setZOrderOnTop(true);
					
					
					Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
					Utils.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
					Utils.Render.glSurface.setRenderer(Utils.Render.renderer);
					Utils.Render.glSurface.setRenderMode(0);
					
					ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);
					
					Utils.Render.initted = true;
				}
			}));
			
		},
		drawBox: function (gl, x, y, z, xsize, ysize, zsize) {
			var GL10 = javax.microedition.khronos.opengles.GL10;
			var size = new Array(xsize, ysize, zsize);
			var vertices = [
				0, 0, 0,
				size[0], 0, 0,
				0, 0, size[2],
				size[0], 0, size[2],

				0, size[1], 0,
				size[0], size[1], 0,
				0, size[1], size[2],
				size[0], size[1], size[2]
			];
			var vertexBuffer = Utils.Render.getFloatBuffer(vertices);
			var indices = [
				0, 1,
				0, 2,
				0, 4,

				3, 1,
				3, 2,
				3, 7,

				5, 4,
				5, 7,
				5, 1,

				6, 4,
				6, 7,
				6, 2
			];
			var indexBuffer = Utils.Render.getShortBuffer(indices);
			gl.glTranslatef(x, y, z);
			gl.glFrontFace(GL10.GL_CCW);
			//gl.glEnable(GL10.GL_CULL_FACE);
			//gl.glCullFace(GL10.GL_BACK);
			gl.glEnable(GL10.GL_BLEND);
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			gl.glLineWidth(2.5);
			gl.glColor4f(1.0,1.0,1.0, 1.0);
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
			gl.glTranslatef(-x, -y, -z);
		},
		drawLine: function (gl, x, y, z, x2, y2, z2) {
			var GL10 = javax.microedition.khronos.opengles.GL10;
			var size = new Array(x2, y2, z2);
			var vertices = [
			                0, 0, 0,
			                x2-x, y2-y, z2-z
			];
			var vertexBuffer = Utils.Render.getFloatBuffer(vertices);
			var indices = [
			               0, 1
			];
			var indexBuffer = Utils.Render.getShortBuffer(indices);
			gl.glTranslatef(x, y, z);
			gl.glEnable(GL10.GL_BLEND);
			gl.glDepthMask(false);
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			gl.glLineWidth(2.5);
			gl.glColor4f(1.0, 1.0, 1.0, 1.0);
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
			gl.glTranslatef(-x, -y, -z);
			gl.glDepthMask(true);
		}
	},
	Theme: {
		current: Themes.DEFAULT
	},
	Screen: {
		currentScreen: "",
		INGAME: "hud_screen"
	},
	File: {
		DecencyDir: android.os.Environment.getExternalStorageDirectory() + "/Decency/",
		getTextFromFile: function (file) {

			var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
			var data = new java.lang.StringBuilder();
			var string;
			while((string = readed.readLine()) != null)
				data.append(string + "\n");
			return data.toString();
		},
		saveTextToFile: function (file, text) {
			if(!file.exists()) file.createNewFile();
			var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, text.length());
			for(var i = 0; i < text.length(); i++) bytes[i] = text.charCodeAt(i);
			var stream = new java.io.FileOutputStream(file);
			try {
				stream.write(bytes);
			} finally  {
				stream.close();
			}
		}
	},
	Base64: {
		encode: function (text) {

			var bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, text.length());
			for(var i = 0; i < text.length(); i++) bytes[i] = new java.lang.Byte(new String(text).charCodeAt(i));
			return android.util.Base64.encodeToString(bytes, 0);
		},
		decode: function (text) {
			return android.util.Base64.decode(text, 0);
		}
	},
	Text: {
		clean: function (text) {
			var allColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "k", "l", "m", "n", "o", "r"];

			if(text != null) {

				allColor.forEach(function (entry) {
					text = text.replace(new RegExp("\u00A7" + entry, 'g'), "");
				});
				return text;
			} else
				return "";
		}
	},
    Item: {
		getDamage: function (id) {
			switch(id) {
				//Swords
			case 268:
			case 283:
				return 5;
				break;
			case 272:
				return 6;
				break;
			case 267:
				return 7;
				break;
			case 276:
				return 8;
				break;
				//Axe
			case 271:
			case 286:
				return 4;
				break;
			case 275:
				return 5;
				break;
			case 258:
				return 6;
				break;
			case 279:
				return 7;
				break;
			}
		}
	},
	MobRender: {
		makeInvi: function (renderer) {
			var model = renderer.getModel();
			model.getPart("body").clear();
			model.getPart("rightArm").clear();
			model.getPart("head").clear();
			model.getPart("leftArm").clear();
			model.getPart("rightLeg").clear();
			model.getPart("leftLeg").clear();
			renderer.name = "godsoft.de.Invi";
		}
	},
	ModSettings: {
		getSlider: function () {
			return new android.widget.SeekBar(ctx);
		}
	},
	Block: {
		isLiquid: function (id) {
			if(id >= 8 && id <= 11) return true;
			return false;
		}
	},
	Player: {
		isInWater: function () {
			if(Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
		onGround: function () {
			var y = getPlayerY();
			while(y > 1) y -= 1;

			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
        isOnGround: function() {
			var y = Entity.getY(getPlayerEnt());
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			  }
		    },
		isCollidedHorizontally: function () {
			var x = getPlayerX();
			var z = getPlayerZ();
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while(x < 1) x += 1;
			while(z < 1) z += 1;
			while(x > 1) x -= 1;
			while(z > 1) z -= 1;

			if(Math.round(x * 100) == 31) x -= 0.01;
			if(Math.round(z * 100) == 31) z -= 0.01;
			if(Math.round(x * 100) == 69) x += 0.01;
			if(Math.round(z * 100) == 69) z += 0.01;
			if(Math.round(x * 100) == 30) blockX--;
			if(Math.round(z * 100) == 30) blockZ--;
			if(Math.round(x * 100) == 70) blockX++;
			if(Math.round(z * 100) == 70) blockZ++;
			//clientMessage(blockX+";"+blockZ);
			if(getTile(blockX, getPlayerY(), blockZ) == 0 && getTile(blockX, getPlayerY() - 1, blockZ) == 0) return false;

			if(Block.getDestroyTime(getTile(blockX, getPlayerY() - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, getPlayerY(), blockZ)) <= 0.1) return false;

			if(Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if(Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		}
	},
	Vel: {
		lastX: 0,
		lastY: 0,
		lastZ: 0,
		calculateSpeed: function () {
			return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
		}
	},
	Pos: {
		lastX: 0,
		lastY: 0,
		lastZ: 0
	},
	Entity: {
		getAll: function () {
			if(Launcher.isToolbox()) {
				return Entity.getAll();
			} else {
				return Utils.Entity.allEntitys;
			}
		},
		targetotedMobs: [true, true],
		/*first mobs second players*/
		allEntitys: new Array(),
		charEnts: new Array(),
		crosshairAimAt: function (ent, pos) {
			if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;
				var a = 0.5 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.5 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 180.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
	    },
		bowAimAt: function (ent) {
			var velocity = 1;
			var posX = Entity.getX(ent) - Player.getX();
			var posY = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) - Player.getY() : Entity.getY(ent) + 1 - Player.getY();
			var posZ = Entity.getZ(ent) - Player.getZ();
			var yaw = (Math.atan2(posZ, posX) * 180 / Math.PI) - 90;
			var y2 = Math.sqrt(posX * posX + posZ * posZ);
			var g = 0.007;
			var tmp = (velocity * velocity * velocity * velocity - g * (g * (y2 * y2) + 2 * posY * (velocity * velocity)));
			var pitch = -(180 / Math.PI) * (Math.atan((velocity * velocity - Math.sqrt(tmp)) / (g * y2)));
			if(pitch < 89 && pitch > -89) {
				setRot(Player.getEntity(), yaw, pitch);
			}
		},
		getNearestEntity(maxrange) {
			var mobs = Utils.Entity.getAll();
			//clientMessage(mobs.length);
			var players = Server.getAllPlayers();

			var small = maxrange;
			var ent = null;
			/*if(mobs.length > 500)clientMessage("lag found: "+mobs.length);*/
			var much = 0;

			mobs.forEach(function (entry) {

				var x = Entity.getX(entry) - getPlayerX();
				var y = Entity.getY(entry) - getPlayerY();
				var z = Entity.getZ(entry) - getPlayerZ();

				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

				var allowed = false;
				if(Utils.Entity.targetotedMobs[1] == true && Entity.getEntityTypeId(entry) == 63) allowed = true;
				if(Utils.Entity.targetotedMobs[0] == true && Entity.getEntityTypeId(entry) < 63) allowed = true;
				//clientMessage("Im here2");

				//clientMessage("Im here3");
				if(dist < small && dist > 0 && allowed == true && Entity.getHealth(entry) > 0) {
					
						small = dist;
						ent = entry;
					
				}

			});


			for(var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var allowed = false;
				if(Utils.Entity.targetotedMobs[1] == true && Entity.getEntityTypeId(players[i]) == 63) allowed = true;
				if(Utils.Entity.targetotedMobs[0] == true && Entity.getEntityTypeId(players[i]) < 63) allowed = true;
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if(dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}

			return ent;
		}
	},
    Combat: {
        
        crosshairAimAt: function (ent, pos) {
			if(ent != null) {
				let x = Entity.getX(ent) - getPlayerX();
				let y = Entity.getY(ent) - getPlayerY();
				let z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;

				let len = Math.sqrt(x * x + y * y + z * z);
				y = y / len;
				let pitch = Math.asin(y);
				let deg_rad = 180 / Math.PI;
				pitch = pitch * deg_rad;
				pitch = -pitch;
				let yaw = -Math.atan2(x, z) * deg_rad;
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
		},
		getNearestEntity(maxrange, bypass) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
			for (var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
					small = dist;
					ent = mobs[i];
				}
			}
			for (var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}
			return ent;
		}
    }
};

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/



var Base64 = android.util.Base64;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var File = java.io.File;
var FOS = java.io.FileOutputStream; 
var createFromFile = android.graphics.Typeface.createFromFile;
var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Decency";
if(!File(path).exists())
File(path).mkdirs();

var font = "AAEAAAAKAIAAAwAgT1MvMlYw9dgAAAEoAAAAYGNtYXCXZo6kAAAFyAAAAdpnbHlmef/vOAAACcgAAEdMaGVhZPzd7fQAAACsAAAANmhoZWEIAwUQAAAA5AAAACRobXR48IADgAAAAYgAAARAbG9jYUqJXHYAAAekAAACJG1heHABHAAoAAABCAAAACBuYW1lPt3hYQAAURQAAAP8cG9zdABpADMAAFUQAAAAIAABAAAAARma1c5FN18PPPUAAAQAAAAAAMygUaAAAAAAzKk+vQAA/4AEgAOAAAAACAACAAAAAAAAAAEAAAOA/4AAAAUAAAD/gASAAAEAAAAAAAAAAAAAAAAAAAEPAAEAAAERACgACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJnAZAABQAAAgACAAAA/8ACAAIAAAACAAAzAMwAAAAABAAAAAAAAACAAAIHAAAACgAAAAAAAAAAQkdETgBAAA0hIgOA/4AAAAOAAIAADgAFAgIAAAKAA4AAAAAgAAAAAAAAAAAAAAEAAAABAAAAAgAAAAKAAAADAAAAAwAAAAMAAAABgAAAAoAAAAKAAAACgAAAAwAAAAEAAAADAAAAAQAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAQAAAAEAAAACgAAAAwAAAAKAAAADAAAAA4AAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAgAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAgAAAAMAAAACAAAAAwAAAAMAAAABgAAAAwAAAAMAAAADAAAAAwAAAAMAAAACgAAAAwAAAAMAAAABAAAAAwAAAAKAAAABgAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAIAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAACgAAAAQAAAAKAAAADgAAAAQAAAAKAAAACgAAAAgAAAAMAAAABAAAAAwAAAAOAAAACAAAAAwAAAAMAAAACgACAA4AAAAMAAAACAAAAAwAAAAGAAAABgAAAAwABgAMAAAADAAAAAQAAAAKAAIABAAAAAgAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAA4AAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAoAAAAMAAIADAAAAAgAAAAOAAAADgAAAAwAAAAMAAAADAAAAA4AAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAOAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAGAAAABgAAAAwAAAAKAAIADgAAAAwAAAAMAAAADAAAAA4AAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADgAAAAYAAAAGAAAABgAAAAYAAAAKAAAACgAAAAoAAAAIAAAABgAAAAwAAAACAAAABgAAAAwAAAAUAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAA4AAAAMAAAADAAAAA4AAAAMAAAADgAAAAwAAAAMAAAADgAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADgAAAA4AAAAOAAAADAAAAAwAAAAOAAAADAAAAAAAAAAAAAAMAAAADAAAAHAABAAAAAADUAAMAAQAAABwABAC4AAAAKgAgAAQACgAAAA0AfgCmAN4A7wD/AVMBeAQBBE8EUSAUIB4gICAiICYgOiCsISL//wAAAAAADQAgAKEAqADgAPEBUgF4BAEEEARRIBQgGCAgICIgJiA5IKwhIv//AAD/9P/i/8D/v/++/73/a/9H/Q/8v/y+4KzgqeCo4KfgpOCS4CHfrAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAmAFYAhAC2APYBCgEuAVIBdgGOAZoBpgGyAdQCBAIaAkwCgAKkAsoC8gMQA0YDcgOGA5oDyAPcBAgENARaBHYEnATABNoE8AUEBSYFPgVSBWoFmAWmBcoF7gYOBioGVgZ4BqQGtgbQBvgHHAdWB3oHoge0B9wH7ggQCBwIKAhICGwIkAiyCNII7gkSCTIJRAlkCY4JoAnECdoJ+gogCkQKZAqGCqIKuArcCvYLLgtOC24LlAugC8YL5Av2DBAMMAxSDIYMmgzIDOgM+g04DUgNVg16DYYNmg24DcwN3g3sDgAOIA4sDj4OTA5gDpwO1g8KD0IPag+OD7AP3hAQEDgQWhB8EK4QzBDqERYROBFUEXARmBG4EdwSDhI2El4SkBLGEvITKhNUE3QTlBPAE+YUEhQ4FF4UhBS2FOwVGBU+FWoVnBXEFeoWHBZIFlwWbhaOFqYWzhb2Fx4XUBeGF7IXzBf0GBAYLBhUGHQYnBjCGO4ZDhk8GWwZeBmKGZwZrhnCGeAZ/hocGjIaQBpWGmwaghqsGs4a7hsMGzQbRBtiG3obrhvkHAYcNBxsHIgcrBzEHOYc+B0WHTwdTh10HaAd3h32Hg4eJh5EHmQeiB6kHtAe/B8oH0ofeh+cH6wf1B/2ICggTiBmIIogtCDSIPQhDCEuIUAhXiGGIZghuCHgIhgiMCJKImIifiKcIsIi3iMIIzQjViOEI6YAAgAAAAAAgAOAAAMABwAAMTUzFQMRMxGAgICAgAEAAoD9gAAAAgAAAgABgAOAAAMABwAAGQEzETMRMxGAgIACAAGA/oABgP6AAAAAAAIAAAAAAoADgAADAB8AAAE1IxUDESM1MzUjNTMRMxEzETMRMxUjFTMVIxEjESMRAYCAgICAgICAgICAgICAgIABgICA/oABAICAgAEA/wABAP8AgICA/wABAP8AAAAAAAUAAAAAAoADgAAHAAsADwATABsAACE1ITUhFSMVEzUzFSU1IRUlNTMVPQEzNTMVIRUBAP8AAgCAgID+AAGA/gCAgIABAICAgIABAICAgICAgICAgICAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADE1MxUhETMRJREzGQE1MxU1ETMRJREzESU1MxWAAYCA/gCAgID+AIABgICAgAEA/wCAAQD/AAEAgICAAQD/AIABAP8AgICAAAAAAAgAAAAAAoADgAADAAcACwAPABsAHwAjACcAADM1IRUzNTMVJREzEQE1MxUBNSM1IzUzNTMRMxEBNTMVMzUzFSU1MxWAAQCAgP2AgAGAgP8AgICAgID+gICAgP8AgICAgICAAQD/AAEAgID/AICAgID/AP8AAgCAgICAgICAAAAAAgAAAgABAAOAAAMABwAAExEzEQMVIzWAgICAAgABAP8AAYCAgAAAAAUAAAAAAgADgAADAAcACwAPABMAACE1IRUlNTMVJREzGQE1MxU9ASEVAQABAP6AgP8AgIABAICAgICAgAGA/oABgICAgICAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU9ATMVNREzEQE1MxUlNSEVAQCAgP8AgP6AAQCAgICAgIABgP6AAYCAgICAgAAAAAUAAAEAAgACgAADAAcACwAPABMAABE1MxUhNTMVJTUhFSU1MxUhNTMVgAEAgP6AAQD+gIABAIABAICAgICAgICAgICAgAAAAAEAAACAAoADAAALAAAlESE1IREzESEVIREBAP8AAQCAAQD/AIABAIABAP8AgP8AAAEAAP+AAIABAAADAAAVETMRgIABgP6AAAEAAAGAAoACAAADAAARNSEVAoABgICAAAEAAAAAAIABAAADAAAxETMRgAEA/wAAAAUAAAAAAoADgAADAAcACwAPABMAADE1MxU1ETMZATUzFTURMxkBNTMVgICAgICAgIABAP8AAQCAgIABAP8AAQCAgAAABQAAAAACgAOAAAMABwAPABcAGwAAMzUhFQE1MxUBETMRMxUjFSERIzUzNTMRATUhFYABgP8AgP6AgICAAYCAgID+AAGAgIABgICA/wACgP6AgIABgICA/YACgICAAAAAAQAAAAACgAOAAAsAADE1IREjNTM1MxEhFQEAgICAAQCAAgCAgP0AgAAAAAAGAAAAAAKAA4AABwALAA8AEwAXABsAADERMxUhNTMRATUzFT0BIRUBNTMVBREzEQE1IRWAAYCA/gCAAQD+AIABgID+AAGAAQCAgP8AAQCAgICAgAEAgICAAQD/AAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlNTMVIREzEQE1IRUBNTMVBREzEQE1IRWAAYD+AIABgID+gAEA/gCAAYCA/gABgICAgICAAQD/AAEAgIABAICAgAEA/wABAICAAAADAAAAAAKAA4AAAwAHABMAABM1MxU9ATMVExEhETMVIREjNSERgICAgP4AgAGAgAEAAgCAgICAgP2AAQABAIABgID8gAAAAAAEAAAAAAKAA4AAAwAHAAsAEwAAMzUhFSU1MxUhETMRAREhFSEVIRWAAYD+AIABgID9gAKA/gABgICAgICAAYD+gAGAAYCAgIAAAAAABQAAAAACgAOAAAMABwAPABMAFwAAMzUhFTURMxEhETMVIRUhGQE1MxU9ASEVgAGAgP2AgAGA/oCAAQCAgIABAP8AAgCAgP8AAgCAgICAgAADAAAAAAKAA4AAAwAHAA8AACERMxkBNTMVNREhFSMRIREBAICA/oCAAoABgP6AAYCAgIABAIABAP6AAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAQD/AAEA/wABAICAgAEA/wABAP8AAQCAgAAAAAAFAAAAAAKAA4AAAwAHAAsAEwAXAAAzNSEVPQEzFQERMxEBNSE1IREzEQE1IRWAAQCA/gCAAYD+gAGAgP4AAYCAgICAgAGAAQD/AP8AgIABAP4AAgCAgAAAAgAAAAAAgAKAAAMABwAAMREzEQMRMxGAgIABAP8AAYABAP8AAAAAAAIAAP+AAIACgAADAAcAABURMxEDETMRgICAgAGA/oACAAEA/wAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAITUzFSU1MxUlNTMVJTUzFT0BMxU9ATMVPQEzFQGAgP8AgP8AgP8AgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAIAAACAAoACAAADAAcAAD0BIRUBNSEVAoD9gAKAgICAAQCAgAAAAAAHAAAAAAIAA4AAAwAHAAsADwATABcAGwAAMTUzFT0BMxU9ATMVPQEzFSU1MxUlNTMVJTUzFYCAgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhNTMVAzUzFT0BMxUBNTMVBREzEQE1IRUBAICAgID+AIABgID+AAGAgIABAICAgICAAQCAgIABAP8AAQCAgAAAAAQAAAAAAwADgAADAAcADwATAAAzNSEVJREzETcRIREzETMRATUhFYACAP2AgIABAICA/YACAICAgAKA/YCAAYD/AAGA/gACAICAAAACAAAAAAKAA4AACwAPAAAxETMVITUzESMRIRkBNSEVgAGAgID+gAGAAwCAgP0AAgD+AAMAgIAAAAMAAAAAAoADgAADAAcAEwAAJREzEQM1MxUBESEVIRUhFSERIRUCAICAgP2AAgD+gAGA/oABgIABgP6AAgCAgP2AA4CAgID+gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIACgP2AAgCAgICAgAACAAAAAAKAA4AAAwALAAAlETMRBREhFSERIRUCAID9gAIA/oABgIACgP2AgAOAgP2AgAAAAQAAAAACgAOAAAsAADERIRUhFSEVIREhFQKA/gABAP8AAgADgICAgP6AgAABAAAAAAKAA4AACQAAMREhFSEVIRUhEQKA/gABAP8AA4CAgID+AAAABAAAAAACgAOAAAMACQANABEAADM1IRU1ESM1IREhETMZATUhFYABgIABAP2AgAIAgICAAYCA/gACgP2AAoCAgAAAAAABAAAAAAKAA4AACwAAMREzESERMxEjESERgAGAgID+gAOA/wABAPyAAgD+AAAAAAABAAAAAAGAA4AACwAAMTUzESM1IRUjETMVgIABgICAgAKAgID9gIAAAwAAAAACgAOAAAMABwALAAAzNSEVJTUzFSERMxGAAYD+AIABgICAgICAgAMA/QAABQAAAAACgAOAAAMABwALABMAFwAAIREzEQE1MxUDNTMVAREzESEVIREBNTMVAgCA/wCAgID+AIABAP8AAYCAAYD+gAGAgIABAICA/YADgP8AgP4AAwCAgAAAAAABAAAAAAKAA4AABQAAMREzESEVgAIAA4D9AIAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MzUzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YACgICA/IAAAAAAAwAAAAACgAOAAAMACwATAAABNTMVAREzFTMVIxEhESM1MxEzEQEAgP6AgICAAYCAgIACAICA/gADgICA/YABgIABgPyAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGAgICAAoD9gAKA/YACgICAAAIAAAAAAoADgAADAA0AAAE1MxUBESEVIRUhFSERAgCA/YACAP6AAYD+gAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVMzUzFSU1MxUhETMRJREzEQE1IRWAAQCAgP8AgP4AgAGAgP4AAYCAgICAgICAAoD9gIACAP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAIREzEQM1MxUBESEVIRUhFSERAgCAgID9gAIA/oABgP6AAgD+AAKAgID9gAOAgICA/gAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJTUzFSERMxEBNSEVJTUzFT0BIRWAAYD+AIABgID+AAGA/gCAAgCAgICAgAGA/oABgICAgICAgICAAAAAAAEAAAAAAoADgAAHAAAhESE1IRUhEQEA/wACgP8AAwCAgP0AAAMAAAAAAoADgAADAAcACwAAMzUhFSURMxEhETMRgAGA/gCAAYCAgICAAwD9AAMA/QAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzETMRMxEBETMRIREzEQEAgP8AgICA/gCAAYCAgICAAQD/AAEA/wABAAIA/gACAP4AAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxEzFSMVITUjNTMRMxEBAID+gICAgAGAgICAAQCAgP8AA4D9gICAgIACgPyAAAAAAAkAAAAAAoADgAADAAcACwAPABMAFwAbAB8AIwAAMREzESERMxEBNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgIABgP6AAYD+gAGAgICAgICAgICAgICAgICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBAID/AICAgP4AgAGAgAKA/YACgICAgICAgICAgAAABQAAAAACgAOAAAUACQANABEAFwAAMREzFSEVATUzFT0BMxU9ATMVPQEhNSERgAIA/gCAgID+AAKAAQCAgAEAgICAgICAgICAgID/AAAAAAABAAAAAAGAA4AABwAAMREhFSERIRUBgP8AAQADgID9gIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAhNTMVJREzEQE1MxUlETMRATUzFQIAgP8AgP8AgP8AgP8AgICAgAEA/wABAICAgAEA/wABAICAAAAAAAEAAAAAAYADgAAHAAAxNSERITUhEQEA/wABgIACgID8gAAAAAUAAAIAAoADgAADAAcACwAPABMAABE1MxUhNTMVJTUzFTM1MxUlNTMVgAGAgP4AgICA/wCAAgCAgICAgICAgICAgIAAAQAA/4ACgAAAAAMAABU1IRUCgICAgAAAAQAAAwABAAOAAAMAABE1IRUBAAMAgIAAAwAAAAACgAKAAAMADQARAAA9ATMdATUhNSE1ITUzEQE1IRWAAYD+gAGAgP4AAYCAgICAgICAgP4AAgCAgAAAAAMAAAAAAoADgAADAAcAEQAAJREzEQE1IRUBETMRMxUjESEVAgCA/oABAP4AgICAAYCAAYD+gAGAgID+AAOA/oCA/wCAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADM1IRU9ATMVIREzEQE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAgICAgAGA/oABAICAgICAAAMAAAAAAoADgAADAAcAEQAANREzGQE1IRUBNSERIzUzETMRgAEA/wABgICAgIABgP6AAYCAgP4AgAEAgAGA/IAAAAAAAwAAAAACgAKAAAMADQARAAAzNSEVJREzFSE1MxEhFRE1IRWAAgD9gIABgID+AAGAgICAAYCAgP8AgAGAgIAAAAIAAAAAAgADgAALAA8AADMRIzUzNTMVIRUhGQE1IRWAgICAAQD/AAEAAgCAgICA/gADAICAAAAAAwAA/4ACgAKAAAMABwARAAAVNSEVAREzEQE1ITUhESE1IRECAP4AgAGA/oABgP6AAgCAgIABgAEA/wD/AICAAQCA/YAAAAAAAwAAAAACgAOAAAMABwAPAAAhETMRATUhFQERMxEzFSMRAgCA/oABAP4AgICAAgD+AAIAgID+AAOA/oCA/oAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAQAAP+AAoADAAADAAcACwAPAAAXNSEVJREzESERMxEDNTMVgAGA/gCAAYCAgICAgICAAQD/AAIA/gACgICAAAAFAAAAAAIAA4AAAwAHAAsADwAXAAAhNTMVJTUzFQM1MxU9ATMVAREzETMVIxEBgID/AICAgID+AICAgICAgICAAQCAgICAgP4AA4D+AID/AAAAAAACAAAAAAEAA4AAAwAHAAAzNTMVJREzEYCA/wCAgICAAwD9AAAEAAAAAAKAAoAAAwAHAA0AEQAAAREzERMRMxEhESEVIxEBNTMVAQCAgID9gAEAgAEAgAEAAQD/AP8AAgD+AAKAgP4AAgCAgAACAAAAAAKAAoAAAwAJAAAhETMRIREhFSERAgCA/YACAP6AAgD+AAKAgP4AAAQAAAAAAoACgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgAADAAD/gAKAAoAAAwAPABMAAAERMxEBETMVMxUjFSEVIRETNSEVAgCA/YCAgIABgP6AgAEAAQABAP8A/oADAICAgID/AAKAgIAAAAAAAwAA/4ACgAKAAAMABwATAAAZATMZATUhFRMRITUhNSM1MzUzEYABAID+gAGAgICAAQABAP8AAQCAgP2AAQCAgICA/QAAAAAAAwAAAAACgAKAAAMACwAPAAABNTMVAREzFTMVIxETNSEVAgCA/YCAgICAAQABgICA/oACgICA/oACAICAAAAAAAUAAAAAAoACgAADAAcACwAPABMAADE1IRU9ATMVJTUhFSU1MxU9ASEVAgCA/gABgP4AgAIAgICAgICAgICAgICAgIAAAgAAAAABgAOAAAMADwAAITUzFSURIzUzETMRMxUjEQEAgP8AgICAgICAgIABgIABAP8AgP6AAAACAAAAAAKAAoAAAwAJAAA1ETMRFTUhETMRgAGAgIACAP4AgIACAP2AAAAAAAUAAAAAAoACgAADAAcACwAPABMAACE1MxUlNTMVMzUzFSURMxEhETMRAQCA/wCAgID+AIABgICAgICAgICAgAGA/oABgP6AAAIAAAAAAoACgAADAA0AADURMxEVNTMRMxEzETMRgICAgICAAgD+AICAAQD/AAIA/YAAAAAJAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAADE1MxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgAAAAwAA/4ACgAKAAAMABwAPAAAXNSEVAREzEQE1ITUhETMRgAGA/gCAAYD+gAGAgICAgAGAAYD+gP8AgIABgP2AAAMAAAAAAoACgAAHAAsAEwAAMTUzNTMVIRUBNTMVPQEhNSEVIxWAgAGA/oCA/oACgICAgICAAQCAgICAgICAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJREzEQE1MxU1ETMZATUhFQEAAQD+gID/AICAAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAQAAAAAAgAOAAAMAADERMxGAA4D8gAAABQAAAAACAAOAAAMABwALAA8AEwAAMTUhFTURMxkBNTMVJREzEQE1IRUBAICA/wCA/oABAICAgAEA/wABAICAgAEA/wABAICAAAAAAAQAAAKAAwADgAADAAcACwAPAAARNTMVITUhFSU1IRUhNTMVgAEAAQD+AAEAAQCAAoCAgICAgICAgIAAAAIAAAAAAIADgAADAAcAADERMxEDNTMVgICAAoD9gAMAgIAAAAMAAAAAAgADAAADAAcACwAAMzUhFSURMxkBNSEVgAGA/gCAAYCAgIACAP4AAgCAgAAAAAACAAAAAAIAAwAADwATAAAxNTMRIzUzNTMVMxUjESEVATUzFYCAgICAgAEA/wCAgAEAgICAgP8AgAKAgIAAAAAABQAAAQABgAKAAAMABwALAA8AEwAAETUzFTM1MxUlNTMVJTUzFTM1MxWAgID/AID/AICAgAEAgICAgICAgICAgICAAAAFAAAAAAKAA4AAEwAXABsAHwAjAAAhNSM1MzUjNTM1MxUzFSMVMxUjFQE1MxUzNTMVJTUzFSE1MxUBAICAgICAgICAgP8AgICA/gCAAYCAgICAgICAgICAgAKAgICAgICAgICAAAAAAAIAAAAAAIADgAADAAcAADERMxEDETMRgICAAYD+gAIAAYD+gAAAAAAFAAD/gAKAAwAABwALAA8AEwAbAAAFNSM1IRUjFRM1MxUhETMRATUzFSU1MzUzFTMVAQCAAYCAgID9gIABgID+AICAgICAgICAAQCAgAGA/oABAICAgICAgIAAAAMAAAAAAwADgAAHAAsADwAAAREhFSMVMxUXESERBxEhEQEAAQCAgID+AIADAAEAAYCAgICAAoD9gIADgPyAAAABAAABAAGAAwAABwAAGQEhNSE1IREBAP8AAYABAAEAgID+AAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAITUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFQEAgICA/gCAgID+AICAgP8AgICA/wCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAAAAQAAAIACgAGAAAUAACU1ITUhEQIA/gACgICAgP8AAAABAIABAAIAAYAAAwAAEzUhFYABgAEAgIAAAAAAAwAAAAADAAOAAAUADQARAAABESERIxUFNSM1MxEhEQcRIREBAAEAgAEAgID+AIADAAEAAYD/AICAgIABgP2AgAOA/IAAAAAAAQAAAwACgAOAAAMAABE1IRUCgAMAgIAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAIAAP+AAoADAAADAA8AABU1IRUBESE1IREzESEVIRECgP6A/wABAIABAP8AgICAAQABAIABAP8AgP8AAAIAAAIAAQADgAAFAAkAABkBMxUzFQM1MxWAgICAAgABAICAAQCAgAABAAACAAEAA4AABwAAETUzNSM1IRGAgAEAAgCAgID+gAAAAAABAYADAAKAA4AAAwAAATUhFQGAAQADAICAAAAAAQAA/4ACgAMAAAkAABURMxEhETMRIRWAAYCA/gCAA4D9gAKA/QCAAAMAAAAAAoADAAADAA0AEQAAETUzFRMRIzUzNSM1IREzETMRgICAgIABAICAAgCAgP4AAYCAgID9AAMA/QAAAAABAAABgACAAgAAAwAAETUzFYABgICAAAACAID/gAIAAIAAAwAHAAAXNSEVPQEzFYABAICAgICAgIAAAAABAAACgACAA4AAAwAAGQEzEYACgAEA/wAAAAAAAgAAAgABgAOAAAMABwAAATUjFQcRIREBAICAAYACgICAgAGA/oAAAAoAAAAAAoACgAADAAcACwAPABMAFwAbAB8AIwAnAAAxNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVgICA/wCAgID/AICAgP4AgICA/gCAgICAgICAgICAgICAgICAgICAgICAgICAgIAAAAgAAAAAAoADgAADAAkADQARABUAGQAdACEAADE1MxUhETMVMxUlETMRJTUzFSU1MxU1ETMRJREzESU1MxWAAQCAgP4AgAEAgP6AgID+AIABgICAgAEAgICAAQD/AICAgICAgIABAP8AgAEA/wCAgIAAAAAABwAAAAACgAOAAAMABwANABEAFQAZAB0AADE1MxU1ETMRBTUjESERATUzFTURMxElETMRJTUzFYCAAQCAAQD+gICA/gCAAYCAgICAAQD/AICAAQD+gAGAgICAAQD/AIABAP8AgICAAAAHAAAAAAKAA4AAAwAHAA0AEQAVAB0AIQAAMTUzFTURMxEFNSMRIREBNTMVNREzESE1MzUjNSERATUzFYCAAQCAAQD+gICA/gCAgAEAAQCAgICAAQD/AICAAQD+gAGAgICAAQD/AICAgP6AAQCAgAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVPQEzFSERMxkBNTMVPQEzFQM1MxWAAYCA/YCAgICAgICAgICAAQD/AAEAgICAgIABAICAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUBNSEVgAGAgID+gAGA/gABAAIAgID+AAEA/wACAICAAQCAgAAAAAADAAAAAAKAA4AACwAPABMAADERMxUhNTMRIxEhGQE1IRUDNSEVgAGAgID+gAGAgAEAAgCAgP4AAQD/AAIAgIABAICAAAUAAAAAAoADgAALAA8AEwAXABsAADERMxUhNTMRIxEhGQE1IRUlNTMVITUzFSU1IRWAAYCAgP6AAYD+AIABgID+AAGAAgCAgP4AAQD/AAIAgICAgICAgICAgAAABQAAAAADAAOAAAsADwAXABsAHwAAMREzFSE1MxEjESERAzUzHQE1ITUhFSMVATUhFSE1MxWAAYCAgP6AgIABAAEAgP6AAQABAIACAICA/gABAP8AAoCAgICAgICAAQCAgICAAAQAAAAAAoADgAALAA8AEwAXAAAxETMVITUzESMRIRkBNSEVATUzFTM1MxWAAYCAgP6AAYD+gICAgAIAgID+AAEA/wACAICAAQCAgICAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUzFYABgICA/oABgP8AgAIAgID+AAEA/wACAICAAQCAgAABAAAAAAKAA4AAFQAAMREzFTM1IzUhFSEVMxUjESEVIREjEYCAgAIA/wCAgAEA/oCAAwCAgICAgID+gIACAP4AAAAAAAcAAP+AAoADgAADAAcACwAPABMAFwAbAAAFNSEVPQEzFSU1IRU9ATMVIREzEQE1MxUlNSEVAQABAID+AAGAgP2AgAGAgP4AAYCAgICAgICAgICAgIACAP4AAYCAgICAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP2AAQACgICAgICAAwCAgAAAAAACAAAAAAKAA4AACwAPAAAxESEVIRUhFSEVIRUBNSEVAoD+AAEA/wACAP8AAQACgICAgICAAwCAgAAAAAAFAAAAAAKAA4AACQANABEAFQAZAAAxETMVIRUhFSEVATUhFSU1MxUhNTMVJTUhFYABAP8AAgD+AAGA/gCAAYCA/gABgAIAgICAgAIAgICAgICAgICAgAAAAwAAAAACgAOAAAsADwATAAAxESEVIRUhFSEVIRUBNTMVMzUzFQKA/gABAP8AAgD+AICAgAKAgICAgIADAICAgIAAAAACAAAAAAIAA4AACwAPAAAzNTMRIzUhFSMRMxUBNSEVgICAAYCAgP4AAQCAAYCAgP6AgAMAgIAAAAIAgAAAAoADgAALAA8AADM1MxEjNSEVIxEzFQM1IRWAgIABgICAgAEAgAGAgID+gIADAICAAAAABAAAAAACgAOAAAsADwATABcAADM1MxEjNSEVIxEzFQE1MxUhNTMVJTUhFYCAgAGAgID+AIABgID+AAGAgAGAgID+gIACgICAgICAgIAAAAADAAAAAAGAA4AACwAPABMAADE1MxEjNSEVIxEzFQE1MxUzNTMVgIABgICA/oCAgICAAYCAgP6AgAMAgICAgAAAAgAAAAADAAOAAAMAEwAAJREzEQURIzUzESEVIREzFSMRIRUCgID9gICAAgD+gICAAYCAAoD9gIABgIABgID/AID/AIAAAAAABQAAAAADAAOAAAMACwAVABkAHQAAATUzFQERMxEzFSMRITUjNTMRIzUhEQE1IRUhNTMVAQCA/oCAgIABgICAgAEA/gABAAEAgAEAgID/AAMA/wCA/oCAgAGAgP0AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxWAAYD+AIABgID+AAGA/gCAAYCAgICAAgD+AAIA/gACAICAgICAgIAAAAkAAACAAoADAAADAAcACwAPABMAFwAbAB8AIwAAPQEzFSE1MxUlNTMVMzUzFSU1MxUlNTMVMzUzFSU1MxUhNTMVgAGAgP4AgICA/wCA/wCAgID+AIABgICAgICAgICAgICAgICAgICAgICAgICAgAADAAAAAAKAA4AAAwANABcAAAERMxEBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAAGA/oD/AIACgP4AgICAAgCAgID9gAAAAAAEAAAAAAKAA4AAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP2AAQCAgIACAP4AAgD+AAKAgIAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID/AAEAgICAAgD+AAIA/gACgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUzFSE1MxUlNSEVgAGA/gCAAYCA/YCAAYCA/gABgICAgAGA/oABgP6AAgCAgICAgICAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNTMVMzUzFYABgP4AgAGAgP4AgICAgICAAgD+AAIA/gACgICAgIAAAAAABgAAAAACgAOAAAMABwALAA8AEwAXAAAhETMRATUzFTM1MxUlNTMVITUzFQE1IRUBAID/AICAgP4AgAGAgP2AAQABgP6AAYCAgICAgICAgIABAICAAAAAAAMAAP+AAoADAAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YADgP8AgP8AgIAAAAAEAAAAAAKAA4AAAwANABEAFQAAPQEzHQE1ITUhNSE1MxEBNSEVATUhFYABgP6AAYCA/gABgP4AAQCAgICAgICAgP4AAgCAgAEAgIAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQM1IRWAAYD+gAGAgP4AAYCAAQCAgICAgICAgP4AAgCAgAEAgIAAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAPQEzHQE1ITUhNSE1MxEBNSEVJTUzFSE1MxUlNSEVgAGA/oABgID+AAGA/gCAAYCA/gABgICAgICAgICA/gACAICAgICAgICAgIAAAAAGAAAAAAMAA4AAAwANABEAGQAdACEAAD0BMx0BNSE1ITUhNTMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+gAGAgP2AgAEAAQCA/oABAAEAgICAgICAgICA/gACgICAgICAgIABAICAgIAAAAAFAAAAAAKAA4AAAwANABEAFQAZAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVMzUzFYABgP6AAYCA/gABgP6AgICAgICAgICAgID+AAIAgIABAICAgIAAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1MxWAAYD+gAGAgP4AAYD/AICAgICAgICAgP4AAgCAgAEAgIAAAAQAAAAAAoACgAADABUAGQAdAAA9ATMdATUzNSM1MzUzFTM1MxEhFSEVATUzFTM1MxWAgICAgICA/wABAP4AgICAgICAgICAgICAgP8AgIACAICAgIAAAAAHAAD/gAKAAwAAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAYD+gAEAgICAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQE1IRWAAgD9gIABgID+AAGA/gABAICAgAGAgID/AIABgICAAQCAgAAAAAAEAAAAAAKAA4AAAwANABEAFQAAMzUhFSURMxUhNTMRIRURNSEVAzUhFYACAP2AgAGAgP4AAYCAAQCAgIABgICA/wCAAYCAgAEAgIAABgAAAAACgAOAAAMADQARABUAGQAdAAAzNSEVJREzFSE1MxEhFRE1IRUlNTMVITUzFSU1IRWAAgD9gIABgID+AAGA/gCAAYCA/gABgICAgAGAgID/AIABgICAgICAgICAgIAAAAUAAAAAAoADgAADAA0AEQAVABkAADM1IRUlETMVITUzESEVETUhFQE1MxUzNTMVgAIA/YCAAYCA/gABgP6AgICAgICAAYCAgP8AgAGAgIABAICAgIAAAAACAAAAAAEAA4AAAwAHAAAzETMRATUhFYCA/wABAAKA/YADAICAAAAAAgAAAAABAAOAAAMABwAAMREzEQM1IRWAgAEAAoD9gAMAgIAABAAAAAACgAOAAAMABwALAA8AACERMxEBNTMVITUzFSU1IRUBAID+gIABgID+AAGAAoD9gAKAgICAgICAgAAAAAMAgAAAAgADgAADAAcACwAAIREzEQE1MxUzNTMVAQCA/wCAgIACgP2AAwCAgICAAAQAAAAAAwADgAADAA8AEwAXAAAhETMRIREzFSE1IRUjFSEZATUhFSE1MxUCAID9gIABAAEAgP6AAQABAIACAP4AAwCAgICA/gADAICAgIAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQE1IRWAAYD+AIABgID+AAGA/gABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVAzUhFYABgP4AgAGAgP4AAYCAAQCAgIABgP6AAYD+gAGAgIABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJREzESERMxEBNSEVJTUzFSE1MxUlNSEVgAGA/gCAAYCA/gABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgICAgICAgICAgAAHAAAAAAMAA4AAAwAHAAsADwAXABsAHwAAMzUhFSURMxEhETMRATUzHQE1ITUhFSMVATUhFSE1MxWAAYD+AIABgID9gIABAAEAgP6AAQABAICAgIABgP6AAYD+gAIAgICAgICAgAEAgICAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1IRUBNTMVMzUzFYABgP4AgAGAgP4AAYD+gICAgICAgAGA/oABgP6AAYCAgAEAgICAgAAAAwAAAIACgAMAAAMABwALAAAlNTMVATUhFQE1MxUBAID+gAKA/oCAgICAAQCAgAEAgIAAAAMAAAAAAoACgAADAA0AFwAAATUzFQE1IxEzETMVIRU1ESM1ITUhFTMRAQCA/wCAgIABAID/AAGAgAEAgID/AIABgP8AgICAAQCAgID+gAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID9gAEAgAIA/gCAgAIA/YADAICAAAADAAAAAAKAA4AAAwAJAA0AADURMxEVNSERMxEBNSEVgAGAgP8AAQCAAgD+AICAAgD9gAMAgIAAAAUAAAAAAoADgAADAAkADQARABUAADURMxEVNSERMxEBNTMVITUzFSU1IRWAAYCA/YCAAYCA/gABgIABgP6AgIABgP4AAoCAgICAgICAAAAABAAAAAACgAOAAAMACQANABEAADURMxEVNSERMxEBNTMVMzUzFYABgID+AICAgIACAP4AgIACAP2AAwCAgICAAAQAAP+AAoADgAADAAcADwATAAAXNSEVAREzEQE1ITUhETMRATUhFYABgP4AgAGA/oABgID9gAEAgICAAYABgP6A/wCAgAGA/YADAICAAAAAAwAA/4ACgAOAAAMABwATAAAlETMRATUhFQERMxEzFSMRIRUhFQIAgP6AAQD+AICAgAGA/oCAAYD+gAGAgID9gAQA/oCA/wCAgAAAAAUAAP+AAoADgAADAAcADwATABcAABc1IRUBETMRATUhNSERMxEBNTMVMzUzFYABgP4AgAGA/oABgID+AICAgICAgAGAAYD+gP8AgIABgP2AAwCAgICAAAACAAAAAAKAA4AAAwATAAA1ETMRFTUzESM1IRUhFTMVIxEhFYCAgAIA/wCAgAEAgAKA/YCAgAKAgICAgP6AgAAABQAAAAACgAKAAAMABwALAA8AGwAAMzUzFTM1IRUlETMZATUzFRkBMxUzNSM1IREhFYCAgAEA/YCAgICAgAEA/wCAgICAgAGA/oABgICA/oABgICAgP6AgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNTMVMzUzFQEAgP8AgICA/gCAAYCA/gCAgIABgP6AAYCAgICAgICAgIABAICAgIAAAAABAAABgAMAAgAAAwAAETUhFQMAAYCAgAACAAACAAEAA4AAAwAHAAAZATMZATUzFYCAAgABAP8AAQCAgAACAAACAAEAA4AAAwAHAAARNTMVNREzEYCAAgCAgIABAP8AAAACAAD/gAEAAQAAAwAHAAAVNTMVNREzEYCAgICAgAEA/wAAAAACAAACAAEAA4AAAwAHAAATNTMVJREzEYCA/wCAAgCAgIABAP8AAAAABAAAAgACAAOAAAMABwALAA8AABkBMxEzETMRATUzFTM1MxWAgID/AICAgAIAAQD/AAEA/wABAICAgIAABAAAAgACAAOAAAMABwALAA8AABE1MxUzNTMVJREzETMRMxGAgID/AICAgAIAgICAgIABAP8AAQD/AAAABAAA/4ACAAEAAAMABwALAA8AABU1MxUzNTMVJREzETMRMxGAgID/AICAgICAgICAgAEA/wABAP8AAAAAAQAAAAABgAMAAAsAADMRIzUzETMRMxUjEYCAgICAgAGAgAEA/wCA/oAAAAABAAABgAEAAoAAAwAAGQEhEQEAAYABAP8AAAAAAwAAAAACgACAAAMABwALAAAxNTMVMzUzFTM1MxWAgICAgICAgICAgAAAAAADAAAAAAEAAYAAAwAHAAsAADM1MxUlNTMVPQEzFYCA/wCAgICAgICAgICAAAMAAAAAAQABgAADAAcACwAAMTUzFT0BMxUlNTMVgID/AICAgICAgICAgAAAAwAAAAACgAOAAAMAFwAbAAAhNSEVJTUjNTM1IzUzNTMVIRUhFSEVIRURNSEVAQABgP4AgICAgIABAP8AAQD/AAGAgICAgICAgICAgICAgAKAgIAAAgAAAgAEgAOAAAcAEwAAExEjNSEVIxEhESERIxEjFSM1IxGAgAGAgAEAAoCAgICAAgABAICA/wABgP6AAQCAgP8AAAACAAAAAAKAA4AADQARAAAxETMRIREhNSERIxEhGQE1MxWAAYD/AAGAgP6AgAKA/wABgID8gAEA/wACgICAAAAAAgAAAAACgAOAAAsADwAAMREhFSERIRUhESEVETMRIwIA/oABgP6AAYCAgAOAgP8AgP8AgAGA/wAAAAAAAwAAAAACgAOAAAMABwATAAAlETMRAxEzEQERIRUhESEVIREhFQIAgICA/YACAP6AAYD+gAGAgAEA/wABgAEA/wD+AAOAgP8AgP8AgAAAAAABAAAAAAKAA4AABQAAMREhFSERAoD+AAOAgP0AAAAAAAEAAP+AAoADgAARAAAVETMRMxEzESM3MxEzESM1BRWAgICAAf+AgP6AgAEAAoD9gAKAgP0A/wB7AnkAAAEAAAAAAoADgAALAAAxESEVIREhFSERIRUCgP4AAYD+gAIAA4CA/wCA/wCAAAAAAAUAAP//AoEDgAADAAcACwAXABsAADURMxETESMRIREjGQEVIxMHAyM1MxEzAwURIxOAAYECgH+BAYABf3+BAQEBgQEBAYD+gAN//oABgP6AAYD+gID+gAEBgYABgP6AgP6AAYAAAAAABwAAAAACgAOAAAMABwAOABIAFwAcACAAABEzFSMzIRUhJTERMTMRMQEhFSElETMxEQEhMRUhIzMVI4CAgAGA/oABgID+gAEA/wABAID+AAGA/oCAgIABAICAgAEA/wABgICAAQD/AAGAgIAAAwAAAAACgAOAAAUACQARAAAZASE1IxETMxUjAREjETMRMxEBAICAgIABAICAgAOA/ICAAwD9gIADAP6A/wD/AAOAAAAFAAAAAAKAA4AABgAKABIAFwAbAAARMxEzFSExATMVIwERIxUzETMRJTMVMSMTMxUjgID/AAEAgIABAICAgP6AgICAgIACgP4AgAEAgAIA/wCA/wACgICAAQCAAAcAAAAAAoADgAAIAAwAEgAXABwAIAAkAAARMxEzFTEjESMBMxUjEzMVMSMxEzMxFSMDFSM1MQUVIzUFFSM1gICAgAEAgICAgICAgICAgAEAgAEAgAOA/oCA/oACgIABAIABAID+gICAgICAgICAAAADAAAAAAKAA4AABAAJAA8AADERMzEZATMVIzETIREjESGAgICAAYCA/wACgP2AAwCAAQD8gAMAAAMAAAAAAoADgAAKAA4AGQAAMRExMxUzMRUjETEBIxUzExUjMRUzMREzMRGAgIABAICAgICAgAOAgID9gAKAgAGAgID9gAOAAAEAAAAAAoADgAANAAARMxEhMREzESMxESERI4ABgICA/oCAA4D+gAGA/IABgP6AAAQAAAAAAoADgAADAAcACwAPAAABFSE1BREjESERIxEBFSE1AgD+gAIAgP6AgAIA/oADgICAgP2AAoD9gAKA/YCAgAAAAQAAAAACgAOAAAgAADERIREjMREhEQKAgP6AA4D8gAMA/QAAAgAAAAACgAOAAAsADwAAMREhOQEVIREhFSERAREjEQIA/oABgP6AAgCAA4CA/wCA/oADAP8AAQAAAAAABQAAAAACgAOAAAMABwALAA8AEwAAExEjESUVITUFFSM1ERUhNSUVIzWAgAIA/oACAID+gAIAgAMA/YACgICAgICAgP2AgICAgIAAAAEAAAAAAoADgAAHAAARIRUhESMRIQKA/wCA/wADgID9AAMAAAQAAAAAAoADgAADAAcACwATAAATESMRExUjNQUVITURIREzESMRIYCAgIACAP6AAYCAgP6AA4D+gAGA/YCAgICAgAGAAYD9AAEAAAADAAAAAAKAA4AAEwAXABsAABMzNTMVMxUjETMVIxEjESM1MxEjIREjESERIxGAgICAgICAgICAgAIAgP6AgAMAgICA/wCA/wABAIABAP8AAQD/AAEAAAAACQAAAAACgAOAAAMABwALAA8AEwAXABsAHwAjAAATESMRIREjEQEVIzUhFSM1HQEjNR0BIzUhFSM1BREjESERIxGAgAKAgP8AgAGAgICAAYCA/wCAAoCAA4D/AAEA/wABAP8AgICAgICAgICAgICAgP8AAQD/AAEAAAAAAAEAAP+AAwADgAAOAAARMxEhMREzETMRIzUxITGAAYCAgID9gAOA/QADAP0A/wCAAAIAAAAAAoADgAADAAsAABEzESMzIREzESMRIYCAgAGAgID+gAOA/oABgPyAAYAAAAEAAAAAAoADgAANAAARMxEzETMRMTMRMzERIYCAgICA/YADgP0AAwD9AAMA/IAAAAEAAP+AAwADgAATAAARMxEzETMRMxEzMRE5ATMRMSM1IYCAgICAgID9gAOA/QADAP0AAwD9AP8AgAAAAAIAAAAAAoADgAAMABAAABEhESEVIREhFSExESMBESMRAQABAP8AAQD+gIACgIADgP6AgP8AgAMA/oD/AAEAAAADAAAAAAMAA4AACQANABEAABEzESEVIREhFSEBESMRAREjEYABAP8AAQD+gAIAgAGAgAOA/oCA/wCAAYD/AAEAAgD8gAOAAAACAAAAAAKAA4AACQANAAARMxEhFSERIRUhAREjEYABgP6AAYD+AAKAgAOA/oCA/wCAAYD/AAEAAAUAAAAAAoADgAADAAcACwAPABgAABMVIzUlFSE1ERUjNQUVITUTIREzESMxESGAgAIA/oCAAgD+gIABAICA/wADAICAgICA/YCAgICAgAGAAQD9gAEAAAAEAAAAAAMAA4AACwAPABMAFwAAETMRMxEzESMRIxEjARUhNQEVITUBESMRgICAgICAAoD/AAEA/wABgIADgP6AAQD9gAEA/oADgICA/QCAgAKA/YACgAAABAAAAAACgAOAAAMAEQAVABkAABMRIxE3IREjESMVIzUjNSERIRMVIzUdASM1gICAAgCAgICAAYD+gICAgAMA/wABAID8gAGAgICAAQD+AICAgICAAAAAAAMAAAAAAoACgAADAAcAEQAAARUhNREVIzU3ITUzESE1ITUhAgD+gICAAYCA/gABgP6AAoCAgP6AgICAgP4AgIAAAAAABgAAAAACgAMAAAMABwALAA8AEwAXAAATESMRExUjNSUVITUBFSE1ARUhNQERIxGAgICAAoD+AAGA/oABgP6AAgCAAYD/AAEAAQCAgICAgP8AgID+gICAAQD/AAEAAAAAAwAAAAACgAKAAAwAEAAUAAAxESEVIRUhFSEVMSEVExUjNRMVIzUCAP6AAYD+gAGAgICAgAKAgICAgIACAICA/wCAgAABAAAAAAKAAoAABQAAMREhFSERAoD+AAKAgP4AAAAAAAQAAP+AAoACgAADAAcACwAVAAAhFSE1ExEjESUVITURIREzESM1ITUxAgD+AICAAgD+gAGAgID+gICAAgD/AAEAgICA/oABAP4AgIAAAAAAAwAAAAACgAKAAAMABwARAAABFSE1ARUhNQMzFSE1MxEhFSMCAP6AAgD+AICAAYCA/gCAAoCAgP4AgIABgICA/wCAAAAFAAAAAAKAAoAAAwAHAAsADwAbAAATESMRIREjEQERIxEhESMRJTMRMxEzFSMRIxEjgIACgID+gIACgID+gICAgICAgAKA/wABAP8AAQD+gP8AAQD/AAEAgAEA/wCA/wABAAAABQAAAAACgAKAAAMABwALAA8AEwAAARUhNQUVIzUTFSM1HQEhNQEVITUCAP4AAoCAgID+AAIA/oACgICAgICA/wCAgICAgAEAgIAAAAIAAAAAAoACgAADAAkAABMRIxETIREzESGAgIABgID+AAKA/gACAP4AAgD9gAAAAAQAAAAAAoADgAADAAkADQARAAATESMREyERMxEhARUjNSUVIzWAgIABgID+AAEAgAEAgAKA/gACAP4AAgD9gAMAgICAgIAAAAUAAAAAAoACgAAHAAsADwATABcAABEzESEVIREjARUjNSUVIzURFSM1BRUjNYABAP8AgAIAgAEAgIABAIACgP8AgP8AAgCAgICAgP6AgICAgIAAAAMAAAAAAoACgAADAAcADQAAExEjESUVIzU3IREjESGAgAEAgIABgID/AAGA/oABgICAgID9gAIAAAAAAAMAAAAAAoACgAAHAAsAEwAAETMVMxUjESMBFSM1NzM1MxEjESOAgICAAYCAgICAgIACgICA/oABgICAgID9gAGAAAAAAQAAAAACgAKAAAsAABEzESERMxEjESERI4ABgICA/oCAAoD/AAEA/YABAP8AAAAABAAAAAACgAKAAAMABwALAA8AAAEVITUFESMZARUhNRkBIxECAP6AAgCA/oCAAoCAgID+gAGA/oCAgAGA/oABgAAAAAABAAAAAAKAAoAABwAAESERIxEhESMCgID+gIACgP2AAgD+AAACAAD/gAKAAoAACgAOAAARIRUhESEVIRUjEQURIxECAP6AAYD+gIACgIACgID+gICAAwCA/oABgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAATESMRJRUhNQEVITUBFSM1ExUjNYCAAgD+gAGA/oACAICAgAIA/oABgICAgP4AgIABgICA/wCAgAAAAAEAAAAAAoACgAAHAAARIRUhESMRIQKA/wCA/wACgID+AAIAAAMAAP+AAoACgAADAAcADwAAIRUhNRMRIxETIREzESM1IQIA/gCAgIABgICA/oCAgAKA/oABgP6AAYD9gIAAAAADAAAAAAKAAoAAAwAHABcAABMRIxEhESMRJSEVIxEzFSMVIzUjNTMRI4CAAoCA/oABgICAgICAgIACAP8AAQD/AAEAgID/AICAgIABAAAAAAkAAAAAAoACgAADAAcACwAPABMAFwAbAB8AIwAAExUjNSEVIzUFFSM1IRUjNR0BIzUdASM1IRUjNQUVIzUhFSM1gIACgID/AIABgICAgAGAgP8AgAKAgAKAgICAgICAgICAgICAgICAgICAgICAgAABAAD/gAKAAoAADAAAETMRIREzMREzESM1IYABAICAgP4AAoD+AAIA/gD/AIAAAAACAAAAAAKAAoAAAwAMAAATESMREyERMTMRIxEhgICAAYCAgP6AAoD/AAEA/wABAP2AAQAAAQAAAAACgAKAAAsAABEzETMRMxEzETMRIYCAgICA/YACgP4AAYD+gAIA/YAAAAAAAQAA/4ADAAKAAA8AABEzETMRMxEzETMRMxEjNSGAgICAgICA/YACgP4AAYD+gAIA/gD/AIAAAAACAAAAAAMAAoAACwAPAAARIRUhFSERIRUhESMFESMRAQABgP6AAYD+AIADAIACgICA/wCAAgCA/wABAAADAAAAAAMAAoAACgAOABIAABEzFSEVIREhFSERAREjEQERIxGAAQD/AAEA/oACAIABgIACgICA/wCAAoD/AP8AAQABAP2AAoAAAAAAAgAAAAACgAKAAAkADQAAETMVIRUhESEVIQERIxGAAYD+gAGA/gACgIACgICA/wCAAYD/AAEAAAAFAAAAAAKAAoAAAwAHAAsADwAXAAATFSM1JRUhNREVIzUFFSE1EyE1MxEjNSGAgAIA/oCAAgD+gIABAICA/wACAICAgICA/oCAgICAgAEAgP6AgAAEAAAAAAMAAoAADAAQABQAGAAAETMRMzUzESM1IxEjESEVITUBFSE1AREjEYCAgICAgAKA/wABAP8AAYCAAoD/AID+gID/AAKAgID+AICAAYD+gAGAAAAAAwAAAAACgAKAAAMABwARAAATFSM1ExEjERMhESMRITUhNSGAgICAgAIAgP6AAYD+gAIAgID/AP8AAQABgP2AAQCAgAAFAAAAAAKAA4AAAwAHABEAFQAZAAABFSE1ARUhNQMzFSE1MxEhFSMBFSM1IRUjNQIA/oACAP4AgIABgID+AIABAIABgIACgICA/gCAgAGAgID/AIADAICAgIAAAAMAAAAAAoADgAALAA8AEwAAMREhFSEVIRUhFSEVARUjNSEVIzUCgP4AAYD+gAIA/oCAAYCAAoCAgICAgAOAgICAgAAAAAAqAf4AAQAAAAAAAAAmAGAAAQAAAAAAAQANAIYAAQAAAAAAAgAHAJQAAQAAAAAAAwAVAIYAAQAAAAAABAAVAIYAAQAAAAAABQALAAAAAQAAAAAABgAJABkAAQAAAAAACAAPAJsAAQAAAAAACQAGAHcAAQAAAAAACgBNAAsAAQAAAAABAAAIAFgAAQAAACAAAAAmAGAAAQAAACAAAQANAIYAAQAAACAAAgAHAJQAAQAAACAAAwAVAIYAAQAAACAABAAVAIYAAQAAACAABQALAAAAAQAAACAABgAJABkAAQAAACAACAAPAJsAAQAAACAACQAGAHcAAQAAACAACgBNAAsAAwABBAkAAABMAZQAAwABBAkAAQAaAKoAAwABBAkAAgAOAMYAAwABBAkAAwAqAKoAAwABBAkABAAqAKoAAwABBAkABQAWANQAAwABBAkABgASAQYAAwABBAkACAAeAeAAAwABBAkACQAMAcIAAwABBAkACgCaAOoAAwABBAkBAAAQAYQAAwABBBkAAABMAZQAAwABBBkAAQAaAKoAAwABBBkAAgAOAMYAAwABBBkAAwAqAKoAAwABBBkABAAqAKoAAwABBBkABQAWANQAAwABBBkABgASAQYAAwABBBkACAAeAeAAAwABBBkACQAMAcIAAwABBBkACgCaAOpWZXJzaW9uIDEuMdDz8fHq6Okg+PDo9PIgTWluZWNyYWZ0LiDR5OXr4O3uIPEg7fPr/yDo5yBmb250LnBuZyArIOTu4eDi6+Xt+yDj6+j0+yDo5yDg7ePrQVFBTWRGcG5Db3B5cmlnaHQgqSAyMDA0LTIwMTIsIEJPR0RBTiBTb2Z0d2FyZU1pbmVjcmFmdCBSdXMgUmVndWxhckZvbnRDcmVhdG9yIDYuMABNAGkAbgBlAGMAcgBhAGYAdAAgAFIAdQBzACAAUgBlAGcAdQBsAGEAcgBWAGUAcgBzAGkAbwBuACAAMQAuADEEIARDBEEEQQQ6BDgEOQAgBEgEQAQ4BEQEQgAgAE0AaQBuAGUAYwByAGEAZgB0AC4AIAQhBDQENQQ7BDAEPQQ+ACAEQQAgBD0EQwQ7BE8AIAQ4BDcAIABmAG8AbgB0AC4AcABuAGcAIAArACAENAQ+BDEEMAQyBDsENQQ9BEsAIAQzBDsEOAREBEsAIAQ4BDcAIAQwBD0EMwQ7AEEAUQBBAE0AZABGAHAAbgBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMAA0AC0AMgAwADEAMgAsACAAQgBPAEcARABBAE4AIABTAG8AZgB0AHcAYQByAGUARgBvAG4AdABDAHIAZQBhAHQAbwByACAANgAuADAAAwAAAAAAAABmADMAAAAAAAAAAAAAAAAAAAAAAAAAAA==";



var fontFile = new File(path + "/minecraft.ttf");
if(!fontFile.exists()) {
fontFile.createNewFile();
var fileOutputStream = new FOS(fontFile);
fileOutputStream.write(Base64.decode(font, 0));
fileOutputStream.close();     
};

var font = new createFromFile(path + "/minecraft.ttf");

var file = {
select:function(dir, fileName){
return (new File(dir, fileName));
},
exists:function(selectedFile){
return selectedFile.exists();
},
create:function(selectedFile){
selectedFile.createNewFile();
return selectedFile;
},
del:function(selectedFile){
selectedFile.delete();
},
read:function(selectedFile){
var readed = (new BufferedReader(new FileReader(selectedFile)));
var data = new StringBuilder();
var string;
while((string = readed.readLine()) != null){
data.append(string);
data.append('\n');
}
return data.toString();
},
readLine:function(selectedFile, line){
var readT = new file.read(selectedFile);
var lineArray = readT.split('\n');
return lineArray[line - 1];
},
readKey:function(selectedFile, key, keySeparator){
var isText = 0;
var textR = new file.read(selectedFile);
var splitTextR = textR.split('\n');
for(var i = 0; i < splitTextR.length; i++){
var textRF = splitTextR[i].split(keySeparator);
if(textRF[0] == key){
return textRF[1];
isText = 1;
break;
}
if(!isText){
return '[Unknown]';
}}},
write:function(selectedFile, text){
file.rewrite(selectedFile, (new file.read(selectedFile)) + text);
},
rewrite:function(selectedFile, text){
var writeFOS = new FOS(selectedFile);
writeFOS.write(new String(text).getBytes());
},
writeKey:function(selectedFile, key, keyText, keySeparator){
var isText = 0;
var textR = new file.read(selectedFile);
var splitTextR = textR.split('');
for(var i = 0; i < splitTextR.length; i++){
var textRF = splitTextR[i].split(keySeparator);
if(textRF[0] == key){
var splitWithKey = textR.split(key + keySeparator + new file.readKey(selectedFile, key));
file.rewrite(selectedFile, splitWithKey[0] + key + keySeparator + keyText + splitWithKey[1]);
isText = 1;break;
}}
if(!isText){
file.write(selectedFile, key + keySeparator + keyText);
}},
mPlay:function(musicPath){
MediaPlayer.setDataSource(musicPath);
MediaPlayer.prepare();
MediaPlayer.start();
},
mStop:function(){
MediaPlayer.reset();
}};


function getTextFromFile(filee){
    var readed = (new BufferedReader(new FileReader(filee)));
    var data = new StringBuilder();
    var string;
    while((string = readed.readLine()) != null)
    data.append(string + "\n");
    return data.toString();
};

Decency.cmessage = function (text) {
	clientMessage(ChatColor.BLUE + "D" + ChatColor.WHITE + "ecency" + ChatColor.GRAY + " - " + ChatColor.GREEN + text);
}
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/


if(!File(path).exists())
File(path).mkdirs();



var deletef = file.select(path,'decency.log');
file.del(deletef);
var filee = new File(path, "decency.log");
if(!filee.exists()){
filee.createNewFile();}
var logfile = file.select(path, "decency.log");
file.create(logfile);
file.write(logfile, "[Log] >> Decency v1.00 BETA >> " + now + " Version: " + ModPE.getMinecraftVersion());

file.write(logfile, "[Decency] >> hack created by Autyn!");
file.write(logfile, "[Decency] >> menu taken from DragOP!");
file.write(logfile, "[Decency] >> logs by _Real_Virus325_ & autyn");

var fontFile = new File(path + "/minecraft.ttf");
if(!fontFile.exists()) {
fontFile.createNewFile();
var fileOutputStream = new FOS(fontFile);
fileOutputStream.write(Base64.decode(font, 0));
fileOutputStream.close();
file.write(logfile, "[Log] >> Font file created! " + now.getHours() +":"+ now.getMinutes() +":"+ now.getSeconds());      
};
var deletecfg = file.select(path,'config.cfg');
file.del(deletecfg);
var filecfg = new File(path, "config.cfg");
if(!filecfg.exists()){
filecfg.createNewFile();}
file.write(filecfg, "[CFG] >> In the future!");    
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
Decency.addCode = function (code) {
	l[0].push(code);
}
Decency.setLString = function (code, lang, value) {
		var done = false;
		l[0].forEach(function (entry, index, array) {
			if(entry.toLowerCase() == code.toLowerCase()) {
				l[lang][index] = value;
				done = true;
			}
		});
		if(done) return;
		//Decency.addCode(code);
		//l[0].push(code+"".toLowerCase());
		//Decency.setLString(code, lang, value);
	}
	//Decency.addCode(code);
Decency.addCode("special.panic");
Decency.addCode("special.target")
Decency.addCode("special.bypass");
Decency.addCode("special.more");
Decency.addCode("hacks.speed");
Decency.addCode("hacks.aimaura");
Decency.addCode("hacks.jumpspeed");
Decency.addCode("hacks.autojump");
Decency.addCode("hacks.tpaura");
Decency.addCode("hacks.bowaimbot");
Decency.addCode("hacks.clicktp");
Decency.addCode("hacks.longjump");
Decency.addCode("hacks.flight");
Decency.addCode("hacks.forcefly");
Decency.addCode("hacks.step");
Decency.addCode("hacks.boost");
Decency.addCode("hacks.jesus");
Decency.addCode("hacks.nodownglide");
Decency.addCode("hacks.glide");
Decency.addCode("hacks.criticals");
Decency.addCode("hacks.playerEsp");
Decency.addCode("hacks.forceSpeed");
Decency.addCode("hacks.tracers");
Decency.addCode("hacks.nuker");
Decency.addCode("hacks.spam");
Decency.addCode("hacks.elevator");
Decency.addCode("hacks.vis.road");
Decency.addCode("moduletype.mod");
Decency.addCode("moduletype.special");
Decency.addCode("moduletype.command");
Decency.addCode("moddialog.description");
Decency.addCode("moddialog.type");
Decency.addCode("state.on");
Decency.addCode("state.off");
Decency.addCode("screen.settings");
Decency.addCode("screen.updatemgr");
Decency.addCode("screen.about");
file.write(logfile, "[Log] >> codes loaded ");
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
//Decency.setLString(code, lc.en_US, value);
Decency.setLString("special.bypass", lc.en_US, "Bypass");
Decency.setLString("special.target", lc.en_US, "Target");
Decency.setLString("special.panic", lc.en_US, "Panic");
Decency.setLString("special.more", lc.en_US, "MORE");
Decency.setLString("hacks.speed", lc.en_US, "Speed");
Decency.setLString("hacks.boost", lc.en_US, "Boost");
Decency.setLString("hacks.forceSpeed", lc.en_US, "ForceSpeed");
Decency.setLString("hacks.aimaura", lc.en_US, "AimAura"); //No good German translation for aim aura
Decency.setLString("hacks.autojump", lc.en_US, "AutoJump");
Decency.setLString("hacks.tpaura", lc.en_US, "TP-Aura");
Decency.setLString("hacks.clicktp", lc.en_US, "TapTp");
Decency.setLString("hacks.vis.road", lc.en_US, "VisRoad");
Decency.setLString("hacks.longjump", lc.en_US, "BunnyHop");
Decency.setLString("hacks.flight", lc.en_US, "Flight");
Decency.setLString("hacks.forcefly", lc.en_US, "ForceFly");
Decency.setLString("hacks.step", lc.en_US, "Step");
Decency.setLString("hacks.jesus", lc.en_US, "Jesus");
Decency.setLString("hacks.nodownglide", lc.en_US, "NoDown");
Decency.setLString("hacks.glide", lc.en_US, "Glide");
Decency.setLString("hacks.criticals", lc.en_US, "Criticals");
Decency.setLString("hacks.playerEsp", lc.en_US, "PlayerESP");
Decency.setLString("hacks.tracers", lc.en_US, "Tracers");
Decency.setLString("hacks.spam", lc.en_US, "Spam");
Decency.setLString("hacks.elevator", lc.en_US, "Elevator");
Decency.setLString("hacks.nuker", lc.en_US, "Nuker");
Decency.setLString("moduletype.mod", lc.en_US, "Mod");
Decency.setLString("moduletype.special", lc.en_US, "Special");
Decency.setLString("moduletype.command", lc.en_US, "Command");
Decency.setLString("moddialog.description", lc.en_US, "Description");
Decency.setLString("moddialog.type", lc.en_US, "Type");
Decency.setLString("state.on", lc.en_US, "On");
Decency.setLString("state.off", lc.en_US, "Off");
file.write(logfile, "[Log] >> strings loaded!");
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
simpleToast = function (text, showPrefix) {
	try {
		let ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
				let thetoast = android.widget.Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, android.widget.Toast.LENGTH_LONG);
				let layout = new android.widget.LinearLayout(ctx);
				let msg = new android.widget.TextView(ctx);
				if(showPrefix || showPrefix == null) { text = android.text.Html.fromHtml('<b><font color="blue">D</font></b><b><font color="white">ecency</font></b>') +" - " + text;
               } else { 
                text = showPrefix + ": " + text;
                }
				msg.setText(text);
				msg.setGravity(android.view.Gravity.CENTER);
				msg.setTextSize(16);
				msg.setPadding(10, 10, 10, 10);
				msg.setTextColor(android.graphics.Color.WHITE);
				layout.addView(msg);
				layout.setBackground(Serrte);
				layout.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (v) {
						thetoast.cancel();
					}
				}));
				thetoast.setView(layout);
				thetoast.show();
			}
		}));
	} catch(e) {
		file.write(logfile, "[Log] >> ERROR >> simpleToast >> " + e);

	}
}
function isOnGround() {
			var y = Entity.getY(getPlayerEnt());
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			  }
		    }
isOnGround();
Decency.getL = function () {
	//Todo
	return l[1];
}

Decency.getLString = function (code) {
	var str = code;
	l[0].forEach(function (entry, index, array) {

		if(entry.toLowerCase()
			.indexOf(code.toLowerCase()) > -1) {
			try {
				str = Decency.getL()[index];
			} catch(e) {
				try {
					str = l[1][index];
				} catch(e) {
					simpleToast(e);
				}
			}
		}
	});
	return str;
}
Decency.cmessage = function (text) {
	clientMessage(ChatColor.BLUE + "D" + ChatColor.WHITE + "ecency" + ChatColor.GRAY + " - " + ChatColor.GREEN + text);
}
Decency.cmessage("Enter .help in the chat!");
Decency.loadModsAnim = function (progress) {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function () {
			new android.os.Handler()
				.postDelayed(new java.lang.Runnable({
					run: function () {
						ModPE.langEdit("menu.copyright", "Decency: " + progress + " Modules loaded");
						if(progress < Utils.modsCount) Decency.loadModsAnim(progress + 1);
					}
				}), 100);
		}
	}));
}
Decency.getStyledBackground = function () {
	let bg = new android.graphics.drawable.GradientDrawable();
	bg.setCornerRadius(1);
	bg.setColor(android.graphics.Color.argb(90, 255, 255, 255));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.argb(210, 0, 0, 0));
	return bg;
}
Decency.getStyledBtnBackground = function (state, toggleable) {
	let bg = android.graphics.drawable.GradientDrawable();
	bg.setCornerRadius(1);
	bg.setColor(android.graphics.Color.argb(80, 0, 0, 0));
	if(state) bg.setColor(android.graphics.Color.argb(210, 0, 200, 0));
	if(toggleable == false) bg.setColor(android.graphics.Color.argb(210, 230, 150, 30));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.argb(230, 0, 0, 0));
	return bg;
}



Decency.showModDialog = function (mod) {
	ctx.runOnUiThread(new java.lang.Runnable( {
		run: function () {
			try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
					.getWindowManager()
					.getDefaultDisplay()
					.getMetrics(display);
				var content = new android.widget.RelativeLayout(ctx);
				content.setId(9472729);
				var contentScroll = new android.widget.ScrollView(ctx);
				contentScroll.setId(492628);
				//default content
				var modTitle = new android.widget.TextView(ctx);
				modTitle.setText(android.text.Html.fromHtml("<u>" + mod.name + "</u>"));
				modTitle.setTextSize(18);
                modTitle.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), android.graphics.Color.BLACK);
				modTitle.setGravity(android.view.Gravity.CENTER);
				modTitle.setTextColor(android.graphics.Color.WHITE);
				modTitle.setTypeface(font);
                modTitle.setBackground(Serrte1);
                modTitle.getBackground().setAlpha(150);
				modTitle.setId(94771);
				var modDescText = new android.widget.TextView(ctx);
				modDescText.setText(mod.desc);
                modDescText.setPadding(10, 10, 10, 10);
                modDescText.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), android.graphics.Color.BLACK);
				modDescText.setGravity(android.view.Gravity.CENTER);
				modDescText.setTextSize(13);
				modDescText.setTypeface(font);
				modDescText.setTextColor(android.graphics.Color.WHITE);
				modDescText.setId(29285);
				//settings
				var modSettings = new android.widget.LinearLayout(ctx);
				modSettings.setOrientation(1);
				if(mod.getSettingsLayout) {
					//modSettings = mod.Layout();
					var params = new android.widget.LinearLayout.LayoutParams(width123, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					var gradientLine = new android.graphics.drawable.GradientDrawable();
					gradientLine.setShape(android.graphics.drawable.GradientDrawable.LINE);
					gradientLine.setColor(android.graphics.Color.TRANSPARENT);
					//gradientLine.setCornerRadius(dip2px(100));
					gradientLine.setStroke(2, android.graphics.Color.argb(50, 0, 0, 0));
					var extraParams = new android.widget.LinearLayout.LayoutParams(width123, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					modSettings.addView(mod.getSettingsLayout(extraParams));
					//Im thinking about a line (html <hr> tag) and the layout underneath
				}
				//footer
				var closeButton = new styledBtn();
				closeButton.setText("Close");
				closeButton.setBackground(Serrte1);
                closeButton.getBackground().setAlpha(150);
				closeButton.setId(10472);
				closeButton.setTypeface(font);
				closeButton.setTextColor(android.graphics.Color.WHITE);
				//layout alignement....
				var dialogLayout = new android.widget.RelativeLayout(ctx);
				dialogLayout.setBackgroundDrawable(Decency.getStyledBackground1());
				//dialogLayout.setGravity(android.view.Gravity.CENTER);
				//dialogLayout.setOrientation(LinearLayout.VERTICAL);
				var params = new android.widget.RelativeLayout.LayoutParams(width123, mheight / 3);
				params.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
				dialogLayout.addView(modTitle, params);
				params = new android.widget.RelativeLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				params.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
				content.addView(modDescText, params);
				params = new android.widget.RelativeLayout.LayoutParams(width123, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				params.addRule(android.widget.RelativeLayout.BELOW, modDescText.getId());
				content.addView(modSettings, params);
				contentScroll.addView(content);
				params = new android.widget.RelativeLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				params.addRule(android.widget.RelativeLayout.BELOW, modTitle.getId());
				params.addRule(android.widget.RelativeLayout.ABOVE, closeButton.getId());
				contentScroll.setFillViewport(true);
				dialogLayout.addView(contentScroll, params);
				params = new android.widget.RelativeLayout.LayoutParams(width123, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				params.addRule(android.widget.RelativeLayout.ALIGN_PARENT_BOTTOM);
				dialogLayout.addView(closeButton, params);
				//Dialog Stuff
				dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.setContentView(dialogLayout);
				dialog.setTitle(mod.name);
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener( {
					onDismiss: function () {
						showMenu();
					}
				}));
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(width123, ctx.getWindowManager().getDefaultDisplay().getHeight()/1.5);

				closeButton.setOnClickListener(new android.view.View.OnClickListener( {
					onClick: function (view) {
						dialog.dismiss();
					}
				}));
			} catch(e) {
				simpleToast("Error: " + e);
                file.write(logfile, "[Log] >> ERROR >> "+ e);
			}
		}
	}));
}

Decency.registerModule = function (module) {
	Utils.modsCount += 1;
	if(module.type == ModuleType.command) {
		CommandManager.registerCommand(module);
	} else {
		Decency.mods.push(module);
	}
}
/*
showGui: function () {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
                 let moving3 = false;
				let dx3 = 0;
				let dy3 = 0;
				let mPosX3 = 0;
				let mPosY3 = 0;

				let touchListen = new android.view.View.OnTouchListener({
					onTouch: function (view, motionEvent) {
						try {
							if(!moving3) return false;
							switch(motionEvent.getAction()) {
							case android.view.MotionEvent.ACTION_DOWN:
								dx3 = mPosX3 - motionEvent.getRawX();
								dy3 = mPosY3 - motionEvent.getRawY();
								break;
							case android.view.MotionEvent.ACTION_MOVE:
								mPosX3 = (motionEvent.getRawX() + dx3);
								mPosY3 = (motionEvent.getRawY() + dy3);
								menubind.update(mPosX3, mPosY3, -1, -1);
								break;
							case android.view.MotionEvent.ACTION_UP:
							case android.view.MotionEvent.ACTION_CANCEL:
								moving3 = false;
								break;
							}
						} catch(e) {
							simpleToast("Error: " + e);
						}

						return true;
					}
				});
				let longListen = new android.view.View.OnLongClickListener({
					onLongClick: function (v, t) {
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
							.vibrate(60);
						moving3 = true;
						return true;
					}
				});
                
                
				if(this.bind == null || menubind.isShowing() == false) {
					let btn = new Button(ctx);
					btn.setTypeface(font);
					btn.setText("A");
                    btn.setBackground(this.bind == true ? enabledGradient1 : disabledGradient1);
					
                    btn.setOnTouchListener(touchListen);
					btn.setOnLongClickListener(longListen);
					btn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (btn) {
							 var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180;
                             var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180;
                             var xx=Math.sin(p)*Math.cos(y);
                             var yy=Math.sin(p)*Math.sin(y);
                              var zz=Math.cos(p);
                    
                    setVelZ(getPlayerEnt(), 1.3*yy);
                    setVelX(getPlayerEnt(), 1.3*xx);
                        }
						
					}));
                   
					let layout = new android.widget.LinearLayout(ctx);
                    if(this.isStateMode())
			layout.setBackground(Decency.getStyledBtnBackground(mod.state, true));
		    else
			layout.setBackground(Decency.getStyledBtnBackground(false, false));
					layout.setOrientation(1);
					layout.addView(btn);
					menubind = new android.widget.PopupWindow(layout, dip2px(50), dip2px(50));
					menubind.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 16 * 0, ctx.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 2);
				}
                return layout;
			}
		}));
	},
    */

var backface = false;


/*
var statemodule = {
	name: "Module",
	desc: "Some Desc",
	type: ModuleType.mod,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, YELLOW(alpha:210) = disabled)
		//Call module.state = !module.state; to toggle 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call module.onClick() to toggle
	},
	OnModTick: function () {
		
	},
	onClick: function (btn) {this.state = !this.state},
	onRefresh: function (btn) {
		if(btn != null)btn.setText(Decency.getLString(""));
	}
};
	*/

Decency.getHighestPageNumber = function () {
	var cmds = CommandManager.cmdModules.length;
	var pages = 1;
	while(cmds > 8) {
		cmds -= 8;
		pages++;
	}
	return pages;
}

Decency.showHelpPage = function (page) {
	Decency.cmessage("Showing help page " + page + "/" + Decency.getHighestPageNumber());
	CommandManager.cmdModules.forEach(function (element, index, array) {
		if(index >= 8 * (page - 1) && index <= 8 * page - 1) {
            
			clientMessage("§a§l." + element.alias[0] + " " + element.syntax);
		}
	});
}
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
var aimaura = {
	name: Decency.getLString("hacks.aimaura"),
	desc: "Automatically aims at near mobs!",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onModTick: function () {
		if(this.state) {
            Utils.Combat.crosshairAimAt(Utils.Combat.getNearestEntity(5));
		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.aimaura"));
	}
    /*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(aimaura);
var criticals = {
	name: Decency.getLString("hacks.criticals"),
	desc: "Most of your hits will be critical hits!",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
	tick: 0,
	velTick: 0,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		if(this.state && this.tick < 25) {
			this.tick++;
			if(this.tick == 16) Entity.setPositionRelative(getPlayerEnt(), 0, 0.001, 0);


			if(this.tick == 15) {
				this.velTick = 15;
			}
			if(this.velTick > 0) {
				this.velTick--;
				setVelY(getPlayerEnt(), -0.000001);
			}

		}
	},
	onAttack: function (att, vic) {
		if(this.state && att == getPlayerEnt() && Entity.getVelY(getPlayerEnt()) >= -0.079 && Entity.getHealth(vic) > 0) {
			//clientMessage(this.tick);
			if(this.tick >= 16)
				this.tick = 0;

		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(Decency.getLString("hacks.criticals"));
	}
    /*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(criticals);
var tpaura = {
	name: Decency.getLString("hacks.tpaura"),
	desc: "Automatically teleports you around people so that they can\'t hit you.",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {

	},
	onAttack: function (att, vic) {
		if(att == Player.getEntity() && this.state && Entity.getHealth(vic) > 0) {

            setPosition(getPlayerEnt(), Entity.getX(vic), Entity.getY(vic) + 1, Entity.getZ(vic))


		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.tpaura"));
	}
    /*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(tpaura);
var topaura = {
	name: Decency.getLString("TopAura"),
	desc: "Teleports you around people so that they can't hit you.",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
    lol: true,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
    
    findPos: function (ent) {
		var Ppos = new Array(getPlayerX(), getPlayerY() + (criticals.state && criticals.velTick > 0 ? 0 : 0.5), getPlayerZ());
		var entPos = new Array(Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent));
		var diff = new Array(entPos[0] - Ppos[0], null, entPos[2] - Ppos[2]);
		Ppos[0] += diff[0] * 1.8;
		Ppos[2] += diff[2] * 1.8;
		return Ppos;
		//just inverting pos at the moment
	},
	findVel: function (ent) {
		var Ppos = new Array(getPlayerX(), getPlayerY() + criticals.state && criticals.velTick > 0 ? 0 : 0.5, getPlayerZ());
		var entPos = new Array(Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent));
		var diff = new Array(entPos[0] - Ppos[0], (topaura.lol ? 0.25 : 0), entPos[2] - Ppos[2]);
		while(diff[0] > 1.5 || diff[0] < -1.5 || diff[2] > 1.5 || diff[2] < -1.5) {
			diff[0] = diff[0] / 1.2;
			diff[2] = diff[2] / 1.2;
		}

		return diff;
	},
	onAttack: function (att, vic) {
		if(att == Player.getEntity() && this.state && Entity.getHealth(vic) > 0) {

			var pos = this.findPos(vic);
			var vel = this.findVel(vic);

			if(getTile(pos[0], pos[1], pos[2]) == 0 && getTile(pos[0], pos[1] - 1, pos[2]) == 0 && getTile(pos[0], pos[1] - 2, pos[2]) == 0) {

					Entity.setPosition(Player.getEntity(), pos[0], pos[1]+0.2, pos[2]);
					Utils.Entity.crosshairAimAt(vic, pos);
				
			}


		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("TopAura"));
	}
    /*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(topaura);
var hitboost = {
	name: Decency.getLString("HitBoost"),
	desc: "When you attack the entity, you boosting to him.",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onAttack: function (att, vic) {
		if(this.state){
            var pitch = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI)/180;
var yaw = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI)/180;
var X = Math.sin(pitch) * Math.cos(yaw);
var Y = Math.cos(pitch);
var Z = Math.sin(pitch) * Math.sin(yaw);
setVelX(getPlayerEnt(), X * 1.5);
setVelY(getPlayerEnt(), Y * 1.5);
setVelZ(getPlayerEnt(), Z * 1.5);
        }
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("HitBoost"));
	}
    /*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(hitboost);
var velocity = {
	name: "Velocity",
	desc: "Disables knockback",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
	attackTick: 0,
    tick: 0,
	lastHealth: 0,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onModTick: function () {
        this.tick++;
		if(this.tick >= 1001) {
			this.tick = 0;
		}
		if(!this.state || Entity.getHealth(getPlayerEnt()) <= 0)
			return
		if(this.attackTick > 0)
			this.attackTick--;
		else
			Entity.setImmobile(getPlayerEnt(), false);

		if(this.lastHealth > Entity.getHealth(getPlayerEnt())) {
			Entity.setImmobile(getPlayerEnt(), true);
            Decency.cmessage("Immobiled at " + this.tick + " tick")
            file.write(logfile, "[Log] >> InGame >> Immobiled at " + this.tick + " tick");
			this.attackTick = 1;
		}

		this.lastHealth = Entity.getHealth(getPlayerEnt());
	},
	onHurt: function (att, vic, hearts) {
		if(!this.state || (vic != getPlayerEnt()))
			return;
		Entity.setImmobile(getPlayerEnt(), true);
		this.attackTick = 1;
	},
	onClick: function (btn) {
		this.state = !this.state
		this.lastHealth = Entity.getHealth(getPlayerEnt());
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(velocity);
var autosword = {
	name: "AutoSword",
	desc: "Automatically selects the best sword in your hotbar if an enemy is near you",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
	isTrRunning: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	startThread: function () {
		if(autosword.isTrRunning)
			return;
		let t = new java.lang.Thread(new java.lang.Runnable({
			run: function () {
				autosword.isTrRunning = true;
				while(autosword.state) {
					if(Utils.Combat.getNearestEntity(5, true) != null) {
						let bestsword = [-1, -1];
						for(let i = 0; i < 10; i++) {
							let dmg = Utils.Item.getDamage(Player.getInventorySlot(i));
							if(dmg > bestsword[0]) {
								bestsword[0] = dmg;
								bestsword[1] = i;
							}
						}
						if(bestsword[1] != -1)
							Player.setSelectedSlotId(bestsword[1]);
					}
					java.lang.Thread.sleep(50);
				}
				autosword.isTrRunning = false;
			}
		}));
		t.start();
	},
	onClick: function (btn) {
		this.state = !this.state;
		if(this.state)
			this.startThread();
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(autosword);
var hitbox = {
	name: "Hitbox",
	desc: "Increases the size of hitted entities",
	type: ModuleType.mod,
	category: ModCategory.COMBAT,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		if(this.state == true) {
			Entity.setCollisionSize(Player.getPointedEntity(), 10, 10);
		}else{
            Entity.setCollisionSize(Player.getPointedEntity(), 0.6, 0.85);
        }
	},
	onClick: function (btn) {
		this.state = !this.state
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(hitbox);
file.write(logfile, "[Log] >> combat modules loaded! ");
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
//MOVEMENT

var forcefly = {
	name: Decency.getLString("hacks.forcefly"),
	desc: "Enable creative fly.",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		if(this.state)
			Player.setFlying(1);
	},
	onClick: function (btn) {
		this.state = !this.state;
		Player.setFlying(this.state ? 1 : 0);
		Player.setCanFly(this.state ? 1 : Level.getGameMode());
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.forcefly"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(forcefly);
var flight = {
	name: Decency.getLString("hacks.flight"),
	desc: "You can fly when you shifting.",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		if(this.state){
			           if(Entity.isSneaking(Player.getEntity()) == true){
var pitch = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI)/180;
var yaw = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI)/180;
var X = Math.sin(pitch) * Math.cos(yaw);
var Y = Math.cos(pitch);
var Z = Math.sin(pitch) * Math.sin(yaw);
setVelX(getPlayerEnt(),X*0.7);
setVelY(getPlayerEnt(), 0.01);
setVelZ(getPlayerEnt(),Z*0.7);
Entity.setPositionRelative(getPlayerEnt(), 0, 0.0005, 0);     

}
        }
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.flight"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(flight);
var clicktp = {
	name: Decency.getLString("hacks.clicktp"),
	desc: "Teleports you to the place where you clicked",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},

	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onUseItem: function (x, y, z, itemid, blockid, side) {
		if(getTile(x, y + 1, z) == 0 && getTile(x, y + 2, z) == 0 && this.state) {
			Entity.setPosition(Player.getEntity(), x + 0.5, y + 2.63 /*1.62 = eye height of steve*/ , z + 0.5);
		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.clicktp"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(clicktp);
var tower = {
	name: Decency.getLString("Tower"),
	desc: "Upping you when you tapeed block.",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
   
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onUseItem: function (x, y, z, itemid, blockid, side) {
		if(this.state) {
			setVelY(getPlayerEnt(), 0.4);
		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("Tower"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(tower);
var airjump = {
	name: Decency.getLString("AirJump"),
	desc: "You jumping when clicks button.",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
	jumpGui: null,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	showGui: function () {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
                 let moving3 = false;
				let dx3 = 0;
				let dy3 = 0;
				let mPosX3 = 0;
				let mPosY3 = 0;

				let touchListen = new android.view.View.OnTouchListener({
					onTouch: function (view, motionEvent) {
						try {
							if(!moving3) return false;
							switch(motionEvent.getAction()) {
							case android.view.MotionEvent.ACTION_DOWN:
								dx3 = mPosX3 - motionEvent.getRawX();
								dy3 = mPosY3 - motionEvent.getRawY();
								break;
							case android.view.MotionEvent.ACTION_MOVE:
								mPosX3 = (motionEvent.getRawX() + dx3);
								mPosY3 = (motionEvent.getRawY() + dy3);
								airjump.jumpGui.update(mPosX3, mPosY3, -1, -1);
								break;
							case android.view.MotionEvent.ACTION_UP:
							case android.view.MotionEvent.ACTION_CANCEL:
								moving3 = false;
								break;
							}
						} catch(e) {
							simpleToast("Error: " + e);
						}

						return true;
					}
				});
				let longListen = new android.view.View.OnLongClickListener({
					onLongClick: function (v, t) {
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
							.vibrate(60);
						moving3 = true;
						return true;
					}
				});
                
                
				if(airjump.jumpGui == null || airjump.jumpGui.isShowing() == false) {
					let jumpBtn = new Button(ctx);
					jumpBtn.setTypeface(font);
					jumpBtn.setText("J");
                    jumpBtn.setTextColor(android.graphics.Color.WHITE);
                    jumpBtn.setBackground(Serrte1);
                    jumpBtn.setOnTouchListener(touchListen);
					jumpBtn.setOnLongClickListener(longListen);
					jumpBtn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (btn) {
							 
                    setVelY(getPlayerEnt(), +0.4);
                    
                        }
						
					}));
                   
					let layout = new android.widget.LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(jumpBtn);
					airjump.jumpGui = new android.widget.PopupWindow(layout, dip2px(50), dip2px(50));
					airjump.jumpGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 16 * 0, ctx.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 2);
				}
			}
		}));
	},
	onClick: function (btn) {
		this.state = !this.state;
		if(!this.state && airjump.jumpGui != null && airjump.jumpGui.isShowing() != false)
			airjump.jumpGui.dismiss();
		else if(this.state)
			this.showGui();
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!");
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("AirJump"));
	}
};
Decency.registerModule(airjump);
var highjump = {
	name: "HighJump",
	desc: "You jumping too high!",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onClick: function (btn) {
		this.state = !this.state;
        if(!this.state){
            Entity.removeEffect(Player.getEntity (), 8); 
        
        }else{
        Entity.addEffect(Player.getEntity (), 8, 5000000, 4, true, false);
       } 
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(highjump);
var step = {
	name: Decency.getLString("hacks.step"),
	desc: "Steps on full blocks like you will on a half slap",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
    
	OnModTick: function () {
		if(this.state && Utils.Player.isCollidedHorizontally()) {
				Entity.setPositionRelative(getPlayerEnt(), 0, 1.6, 0);
				setVelY(getPlayerEnt(), 0.1);
			
		
		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.step"));
	}
};
Decency.registerModule(step);
var jesus = {
	name: Decency.getLString("hacks.jesus"),
	desc: "Jesus",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		if(this.state) {
				if((getTile(getPlayerX(), getPlayerY() - 0.8, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 0.8, getPlayerZ()) <= 11)) {
					setVelY(getPlayerEnt(), 0.2);
				} else if((getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ()) <= 11)) {
					setVelY(getPlayerEnt(), 0.05);
				} else if((getTile(getPlayerX(), getPlayerY() - 1.68, getPlayerZ()) >= 8 && getTile(getPlayerX(), getPlayerY() - 1.68, getPlayerZ()) <= 11))
					setVelY(getPlayerEnt(), 0.015);
                  if(Utils.Player.IsInWater){
                      setVelY(getPlayerEnt(), 0.015);
                  }

		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.jesus"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(jesus);
var bhop = {
	name: Decency.getLString("Bhop"),
	desc: "You automatic jumping! Are you bunny? :D",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
    bhopGui: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		//Call hack.state = !hack.state; to toggle 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call hack.onClick() to toggle
	},
	onModTick: function () {
		if(this.state && Utils.Player.onGround()) {
           setVelY(getPlayerEnt(), +0.4);

		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("Bhop"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(bhop);
var nodownglide = {
	name: Decency.getLString("hacks.nodownglide"),
	desc: "Not letting you to MOVE on y-axis (upwards & downwards)",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onModTick: function () {
		if(this.state) {
			setVelY(getPlayerEnt(), 0.0);
		}
	},
	onClick: function (btn) {
		this.state = !this.state;
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.nodownglide"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(nodownglide);
var glide = {
	name: Decency.getLString("hacks.glide"),
	desc: "Let you glide through the air. Sometimes good to bypass anti cheats",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onModTick: function () {
		if(this.state) {
				setVelY(getPlayerEnt(), -0.05);
		}
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.glide"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(glide);
var boost = {
	name: Decency.getLString("hacks.boost"),
	desc: "Boost you to front of you",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
	boostGui: null,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	showGui: function () {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
                 let moving3 = false;
				let dx3 = 0;
				let dy3 = 0;
				let mPosX3 = 0;
				let mPosY3 = 0;

				let touchListen = new android.view.View.OnTouchListener({
					onTouch: function (view, motionEvent) {
						try {
							if(!moving3) return false;
							switch(motionEvent.getAction()) {
							case android.view.MotionEvent.ACTION_DOWN:
								dx3 = mPosX3 - motionEvent.getRawX();
								dy3 = mPosY3 - motionEvent.getRawY();
								break;
							case android.view.MotionEvent.ACTION_MOVE:
								mPosX3 = (motionEvent.getRawX() + dx3);
								mPosY3 = (motionEvent.getRawY() + dy3);
								boost.boostGui.update(mPosX3, mPosY3, -1, -1);
								break;
							case android.view.MotionEvent.ACTION_UP:
							case android.view.MotionEvent.ACTION_CANCEL:
								moving3 = false;
								break;
							}
						} catch(e) {
							simpleToast("Error: " + e);
						}

						return true;
					}
				});
				let longListen = new android.view.View.OnLongClickListener({
					onLongClick: function (v, t) {
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
							.vibrate(60);
						moving3 = true;
						return true;
					}
				});
                
                
				if(boost.boostGui == null || boost.boostGui.isShowing() == false) {
					let boostBtn = new Button(ctx);
					boostBtn.setTypeface(font);
					boostBtn.setText("B");
                    boostBtn.setBackground(Serrte1);
                    boostBtn.setTextColor(android.graphics.Color.WHITE);
                    boostBtn.setOnTouchListener(touchListen);
					boostBtn.setOnLongClickListener(longListen);
					boostBtn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (btn) {
							 var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180;
                             var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180;
                             var xx=Math.sin(p)*Math.cos(y);
                             var yy=Math.sin(p)*Math.sin(y);
                              var zz=Math.cos(p);
                    setVelY(getPlayerEnt(), +0.47);
                    setVelZ(getPlayerEnt(), 1.3*yy);
                    setVelX(getPlayerEnt(), 1.3*xx);
                        }
						
					}));
                   
					let layout = new android.widget.LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(boostBtn);
					boost.boostGui = new android.widget.PopupWindow(layout, dip2px(50), dip2px(50));
					boost.boostGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 16 * 0, ctx.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 2);
				}
			}
		}));
	},
	onClick: function (btn) {
		this.state = !this.state;
		if(!this.state && boost.boostGui != null && boost.boostGui.isShowing() != false)
			boost.boostGui.dismiss();
		else if(this.state)
			this.showGui();
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!");
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.boost"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(boost);
var WallHack = {
	name: "WallHack",
	desc: "You can see around blocks!",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
	tick: 0,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		this.tick++;
		if(this.tick < 20) return;
		this.tick = 0;
		Entity.setCollisionSize(getPlayerEnt(), 0, 0);
	},
	onClick: function (btn) {
		this.state = !this.state;
		if(this.state)
			Entity.setCollisionSize(getPlayerEnt(), 0, 0);
		else
			Entity.setCollisionSize(getPlayerEnt(), 0.6, 0.6);
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(WallHack);
var visualroad = {
	name: Decency.getLString("hacks.vis.road"),
	desc: "Blocks are placed under your feet. They are visible only to you.",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
          visualRoad();
	},
	onClick: function (btn) {
		this.state = !this.state;
	   
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.vis.road"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(visualroad);
file.write(logfile, "[Log] >> movement modules loaded! ");

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

//MISC

var playerESP = {
	name: Decency.getLString("hacks.playerEsp"),
	desc: "Draws an ESP (Extra Sensory Perception on a player)\n, can be used even if the player is behind the walls.",
	type: ModuleType.mod,
    category: ModCategory.MISC,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, YELLOW(alpha:210) = disabled)
		//Call module.state = !module.state; to toggle 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call module.onClick() to toggle
	},
	onRender: function (gl) {
		if(playerESP.state && getPlayerEnt() != -1 && getPlayerEnt() != -1 && true) {
			var mobs = Utils.Entity.getAll();
			var players = Server.getAllPlayers();

			//clientMessage(mobs.length);
			mobs.forEach(function (entry) {

				if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
					Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.50, 1, 2, 1);

				}
			});
			players.forEach(function (entry) {
				if(entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
					Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);

				}
			});

			//Utils.Render.drawBox(gl,Player.getPointedVecX()-0.5, Player.getPointedVecY()+1,Player.getPointedVecZ()-0.5, 1, 2, 1);

		}

	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >>  " + this.name + "toggled!");
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.playerEsp"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(playerESP);
var tracers = {
	name: "Tracers",
	desc: "Draws lines from you to your enemy",
	type: ModuleType.mod,
	category: ModCategory.MISC,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onRender: function (gl) {
		if(!this.state)
			return
		let all = Utils.Entity.getAll();
		let players = Server.getAllPlayers();
		let px = getPlayerX();
		let py = getPlayerY();
		let pz = getPlayerZ();
		all.forEach(function (entry) {
			let x = Entity.getX(entry) - px;
			let y = Entity.getY(entry) - py;
			let z = Entity.getZ(entry) - pz;

			let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));



			if(dist <= 200 && dist > 0.1 && Entity.getEntityTypeId(entry) <= 63)
				Utils.Render.drawLine(gl, px, py + 0.8, pz, Entity.getX(entry), Entity.getY(entry) + 1, Entity.getZ(entry));
		});
		players.forEach(function (entry) {
			let x = Entity.getX(entry) - px;
			let y = Entity.getY(entry) - py;
			let z = Entity.getZ(entry) - pz;

			let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

			if(dist <= 200 && dist > 0.1 && Entity.getEntityTypeId(entry) <= 63)
				Utils.Render.drawLine(gl, px, py + 0.8, pz, Entity.getX(entry), Entity.getY(entry) + 1, Entity.getZ(entry));
		});
	},
	onClick: function (btn) {
		this.state = !this.state
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(tracers);
var nuker = {
	name: Decency.getLString("hacks.nuker"),
	desc: "Explodes blocks around you.",
	type: ModuleType.mod,
    category: ModCategory.MISC,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, YELLOW(alpha:210) = disabled)
		//Call module.state = !module.state; to toggle 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call module.onClick() to toggle
	},
	done: true,
	radius: 2,
	OnModTick: function () {
		if(this.state == true && this.done == true){
			var t = new java.lang.Thread(new java.lang.Runnable({
				run: function(){
					nuker.done = false;
					for(var x = -nuker.radius; x < nuker.radius; x++) 
						for(var y = -nuker.radius; y < nuker.radius; y++)
							for(var z = -nuker.radius; z < nuker.radius; z++){
								java.lang.Thread.sleep(5);
								Level.destroyBlock(Math.floor(getPlayerX() + x), Math.floor(getPlayerY() + y), Math.floor(getPlayerZ() + z), false);
							}
					java.lang.Thread.sleep(50);
					nuker.done = true;
				}
			}));
			t.run();
		}
	},
	onClick: function (btn) {
        this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >>  " + this.name + "toggled!");
},
	onRefresh: function (btn) {
		if(btn != null)btn.setText(Decency.getLString("hacks.nuker"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(nuker);
var fullbright = {
	name: "Fullbright",
	desc: "Let you see everything.",
	type: ModuleType.mod,
	category: ModCategory.MISC,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onClick: function (btn) {
		this.state = !this.state;
		Block.setLightLevel(0, this.state ? 15 : 0);
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(fullbright);
var spammer = {
	name: Decency.getLString("hacks.spam"),
	desc: "Spamming in the chat.",
	type: ModuleType.mod,
	category: ModCategory.MISC,
	state: false,
    colume: 0,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		if(this.state){
        this.colume++;
     Server.sendChat('! - Decency - the best mcpe cheat! >_< ' + this.colume); 
 }else{
     if(this.colume > 0)
      this.colume = 0;
      }
	},
	onClick: function (btn) {
		this.state = !this.state;
	   
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.spam"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(spammer);
var liteMenu = {
	name: "LiteMenu",
	desc: "Adds a button which can toggle a module without being in the menu.",
	type: ModuleType.mod,
    category: ModCategory.MISC,
	state: false,
	currentModule: [],
	sgui: null,
	sbtn: null,
	getSettingsLayout: function (params) {
		let settings = new android.widget.LinearLayout(ctx);
        settings.setBackground(Serrte1);
		settings.setOrientation(1);
		let scroll = new android.widget.ScrollView(ctx);
		let modList = new android.widget.LinearLayout(ctx);
		modList.setOrientation(1);
		Decency.mods.forEach(function (entry) {
			if(entry.type == ModuleType.mod) {
				let btn = new android.widget.TextView(ctx);
				btn.setText(entry.name);
				btn.setTypeface(font);
				btn.setTextColor(android.graphics.Color.WHITE);
                btn.setGravity(android.view.Gravity.CENTER);
                btn.setPadding(10,10,10,10);
				btn.setBackground(liteMenu.currentModule.indexOf(entry) <= -1 ? disabledGradient1 : /*liteMenu.currentModule.name == entry.name ? */ enabledGradient1);
				btn.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (view) {

						if(liteMenu.currentModule.indexOf(entry) <= -1) {
							liteMenu.currentModule.push(entry);
							view.setBackground(enabledGradient1);
							liteMenu.showBtn();
						} else {
							liteMenu.currentModule.splice(liteMenu.currentModule.indexOf(entry), 1);
							view.setBackground(disabledGradient1);
							liteMenu.showBtn();
						}
					}
				}));
				modList.addView(btn);
			}
		});
		scroll.addView(modList);
		settings.addView(scroll);
		return settings;
	},
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		//Call hack.state = !hack.state; to toggle 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call hack.onClick() to toggle
	},
	showBtn: function () {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {

				if(liteMenu.sgui != null && liteMenu.sgui.isShowing()) liteMenu.sgui.dismiss();
				let slayout = new android.widget.LinearLayout(ctx);
				slayout.setOrientation(1);
                slayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(mwidth + mwidth /3, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
                slayout.setBackground(Serrte1);
                
                let moving2 = false;
				let dx2 = 0;
				let dy2 = 0;
				let mPosX2 = 100;
				let mPosY2 = 0;

				let touchListen = new android.view.View.OnTouchListener({
					onTouch: function (view, motionEvent) {
						try {
							if(!moving2) return false;
							switch(motionEvent.getAction()) {
							case android.view.MotionEvent.ACTION_DOWN:
								dx2 = mPosX2 - motionEvent.getRawX();
								dy2 = mPosY2 - motionEvent.getRawY();
								break;
							case android.view.MotionEvent.ACTION_MOVE:
								mPosX2 = (motionEvent.getRawX() + dx2);
								mPosY2 = (motionEvent.getRawY() + dy2);
								liteMenu.sgui.update(mPosX2, mPosY2, -1, -1);
								break;
							case android.view.MotionEvent.ACTION_UP:
							case android.view.MotionEvent.ACTION_CANCEL:
								moving2 = false;
								break;
							}
						} catch(e) {
							Decency.ctoast("Error: " + e);
						}

						return true;
					}
				});
				let longListen = new android.view.View.OnLongClickListener({
					onLongClick: function (v, t) {
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
							.vibrate(60);
						moving2 = true;
						return true;
					}
				});
				liteMenu.currentModule.forEach(function (entry3) {
                    
                    

                    

					let btn = new android.widget.TextView(ctx);
					btn.setTypeface(font);
                    btn.setPadding(10, 10, 10, 10);
                    btn.setGravity(Gravity.CENTER);
					btn.setTextColor(android.graphics.Color.WHITE);
					btn.setText(entry3.name);
                    btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), android.graphics.Color.BLACK);
                    btn.setTextSize(13);
					btn.setOnTouchListener(touchListen);
					btn.setOnLongClickListener(longListen);
					btn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (view) {
							entry3.onClick(null);
							let childct = slayout.getChildCount();
							for(let i = 0; i < childct; i++) {
								let v = slayout.getChildAt(i);
								for(let i2 = 0; i2 < liteMenu.currentModule.length; i2++) {
									if(liteMenu.currentModule[i2].name == v.getText()) {
										let m = liteMenu.currentModule[i2];
										v.setBackground(m.isStateMode() ? m.state ? enabledGradient1 : disabledGradient1 : Decency.getStyledBtnBackground1(false, false));
										break;
									}
								}

							}
						}
					}));
					slayout.addView(btn);
				});

				liteMenu.sgui = new android.widget.PopupWindow(slayout, mwidth1, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				liteMenu.sgui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 16 * 0, ctx.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 2);


			}
		}));
	},
	onClick: function (btn) {
		this.state = !this.state;
		if(this.state) {
			Decency.showModDialog(this);
			menu.dismiss();
		} else {
			//liteMenu.currentModule = null;
			if(liteMenu.sgui != null && liteMenu.sgui.isShowing())
				liteMenu.sgui.dismiss();
		}


	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(liteMenu);
var crosshair = {
	name: Decency.getLString("Crosshair"),
	desc: "Simple minecraft crosshair",
	type: ModuleType.mod,
	category: ModCategory.MISC,
	state: false,
	crosshairGui: null,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	showGui: function () {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {

                
				if(crosshair.crosshairGui == null || crosshair.crosshairGui.isShowing() == false) {
					let crossh = new android.widget.TextView(ctx);
					crossh.setTypeface(font);
					crossh.setText("+");
                    crossh.setTextSize(12);
					let layout = new android.widget.LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(crossh);
					crosshair.crosshairGui = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                    crosshair.crosshairGui.setTouchable(false);
					crosshair.crosshairGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 2);
				}
			}
		}));
	},
	onClick: function (btn) {
		this.state = !this.state;
		if(!this.state && crosshair.crosshairGui != null && crosshair.crosshairGui.isShowing() != false)
			crosshair.crosshairGui.dismiss();
		else if(this.state)
			this.showGui();
        file.write(logfile, "[Log] >> InGame >>  " + this.name + "toggled!");
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("Crosshair"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(crosshair);
var elytra = {
	name: "Elytra",
	desc: "Gives you elytra in armor slot.",
	type: ModuleType.mod,
	category: ModCategory.MISC,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onClick: function (btn) {
		this.state = !this.state;
        if(!this.state){
            Player.setArmorSlot(1, 0, 0);
        }else{
            Player.setArmorSlot(1, 444, 0);
        }
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(elytra);
var timerM = {
	name: "Timer-",
	desc: "Sets game speed to 10. Its client Exploit.",
	type: ModuleType.mod,
	category: ModCategory.MISC,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onClick: function (btn) {
		this.state = !this.state;
        if(!this.state){
            ModPE.setGameSpeed(20)
        }else{
            ModPE.setGameSpeed(10)
        }
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(timerM);
var timerP = {
	name: "Timer+",
	desc: "Sets game speed to 40. Its client Exploit.",
	type: ModuleType.mod,
	category: ModCategory.MISC,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onClick: function (btn) {
		this.state = !this.state;
        if(!this.state){
            ModPE.setGameSpeed(20)
        }else{
            ModPE.setGameSpeed(40)
        }
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(timerP);
file.write(logfile, "[Log] >> misc modules loaded! ");

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

//PLAYER

var elevator = {
	name: Decency.getLString("hacks.elevator"),
	desc: "Teleporting u for Y-Port",
	type: ModuleType.mod,
	category: ModCategory.PLAYER,
	state: false,
	elevatorGui: null,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		//Call hack.state = !hack.state; to toggle 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call hack.onClick() to toggle
	},
	showGui: function () {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function () {
                
                
                
                let moving4 = false;
				let dx4 = 0;
				let dy4 = 0;
				let mPosX4 = 0;
				let mPosY4 = 0;

				let touchListen = new android.view.View.OnTouchListener({
					onTouch: function (view, motionEvent) {
						try {
							if(!moving4) return false;
							switch(motionEvent.getAction()) {
							case android.view.MotionEvent.ACTION_DOWN:
								dx4 = mPosX4 - motionEvent.getRawX();
								dy4 = mPosY4 - motionEvent.getRawY();
								break;
							case android.view.MotionEvent.ACTION_MOVE:
								mPosX4 = (motionEvent.getRawX() + dx4);
								mPosY4 = (motionEvent.getRawY() + dy4);
								elevator.elevatorGui.update(mPosX4, mPosY4, -1, -1);
								break;
							case android.view.MotionEvent.ACTION_UP:
							case android.view.MotionEvent.ACTION_CANCEL:
								moving4 = false;
								break;
							}
						} catch(e) {
							simpleToast("Error: " + e);
						}

						return true;
					}
				});
				let longListen = new android.view.View.OnLongClickListener({
					onLongClick: function (v, t) {
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
							.vibrate(60);
						moving4 = true;
						return true;
					}
				});
                
				if(elevator.elevatorGui == null || elevator.elevatorGui.isShowing() == false) {
					let elevatorUpBtn = new Button(ctx);
					elevatorUpBtn.setTypeface(font);
					elevatorUpBtn.setText("UP");
                    elevatorUpBtn.setBackground(Serrte1);
                    elevatorUpBtn.setOnTouchListener(touchListen);
					elevatorUpBtn.setOnLongClickListener(longListen);
					elevatorUpBtn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (btn) {
							Entity.setPositionRelative(getPlayerEnt(), 0, 2, 0);
                            setVelY(getPlayerEnt(), +0.1)
						}
					}));
					let elevatorDownBtn = new Button(ctx);
					elevatorDownBtn.setTypeface(font);
					elevatorDownBtn.setText("DOWN");
                    elevatorDownBtn.setBackground(Serrte1);
                    elevatorDownBtn.setOnTouchListener(touchListen);
					elevatorDownBtn.setOnLongClickListener(longListen);
					elevatorDownBtn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (btn) {
							Entity.setPositionRelative(getPlayerEnt(), 0, -1.2, 0);
						}
					}));
					let layout = new android.widget.LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(elevatorUpBtn);
					layout.addView(elevatorDownBtn);
					elevator.elevatorGui = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
					elevator.elevatorGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, ctx.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 16 * 0, ctx.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 2);
				}
			}
		}));

	},
	onClick: function (btn) {
		this.state = !this.state;
		if(!this.state && elevator.elevatorGui != null && elevator.elevatorGui.isShowing() != false)
			elevator.elevatorGui.dismiss();
		else if(this.state)
			this.showGui();
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("hacks.elevator"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(elevator);
var backface = {
	name: Decency.getLString("BackFace"),
	desc: "Simple backface. Turning your head to your back.",
	type: ModuleType.mod,
	category: ModCategory.PLAYER,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {

		if(this.state){
			 var ent = getPlayerEnt();
                        var getYaw = Math['floor'](Entity['getYaw'](ent));
                        var getPitch = Math['floor'](Entity['getPitch'](ent));
                        if (getPitch <= 189) {
                            Entity['setRot'](ent, getYaw, 192)
                        }
             }
	},
	onClick: function (btn) {
		this.state = !this.state;
	      if(this.state == true)
              backface = true;
        else 
            backface = false;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("BackFace"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(backface);
var derp = {
	name: Decency.getLString("Derp"),
	desc: "Simple derp. You automatic spinning.",
	type: ModuleType.mod,
	category: ModCategory.PLAYER,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {

		if(this.state){
			 var ent = getPlayerEnt();
                        var getYaw = Math['floor'](Entity['getYaw'](ent));
                        var getPitch = Math['floor'](Entity['getPitch'](ent));
                        if (getPitch <= 189) {
                            Entity['setRot'](ent, getYaw +180, getPitch)
                        }
             }
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("Derp"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(derp);
var haste = {
	name: "Haste",
	desc: "You breaking blocks too fast",
	type: ModuleType.mod,
	category: ModCategory.PLAYER,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	onClick: function (btn) {
		this.state = !this.state;
        if(!this.state){
            Entity.removeEffect(Player.getEntity (), 3); 
        
        }else{
        Entity.addEffect(Player.getEntity (), 3, 5000000, 10, true, false);
       } 
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(haste);
var antiafk = {
	name: Decency.getLString("AntiAfk"),
	desc: "Server dont kick you when you afk.",
	type: ModuleType.mod,
	category: ModCategory.PLAYER,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {

		if(this.state){
			 var ent = getPlayerEnt();
                        var getYaw = Math['floor'](Entity['getYaw'](ent));
                        var getPitch = Math['floor'](Entity['getPitch'](ent));
                        if (getPitch <= 189) {
                            Entity['setRot'](ent, getYaw +360, getPitch)
                        }
             }
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null)
			btn.setText(Decency.getLString("AntiAfk"));
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(antiafk);
var nobadeffects = {
	name: "NBEffect",
	desc: "You dont have all bad effects.",
	type: ModuleType.mod,
	category: ModCategory.PLAYER,
	state: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
    OnModTick: function () {

		if(this.state){
		Entity.removeEffect(Player.getEntity (), 2); 
        Entity.removeEffect(Player.getEntity (), 4);
        Entity.removeEffect(Player.getEntity (), 7); 
        Entity.removeEffect(Player.getEntity (), 9); 
        Entity.removeEffect(Player.getEntity (), 15); 
        Entity.removeEffect(Player.getEntity (), 17);
        Entity.removeEffect(Player.getEntity (), 18); 
        Entity.removeEffect(Player.getEntity (), 19); 
        Entity.removeEffect(Player.getEntity (), 20); 
        }
	},
	onClick: function (btn) {
		this.state = !this.state;
        file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
	},
	onRefresh: function (btn) {
		if(btn != null) btn.setText(this.name);
	}/*
*
* MIT License
* 
* © Orbita Project. vk.com/club171149716
* With the support of the YANO Team
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
};
Decency.registerModule(nobadeffects);
/*
var statehack = {
	name: "Hack",
	desc: "Some Desc",
	type: ModuleType.mod,
	category: ModCategory.MOVE,
	state: false,
    bind: false,
	isStateMode: function () {
		return true; //For Menu Button Color (green = enabled, black(alpha:210) = disabled)
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!"); 
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
	},
	OnModTick: function () {
		if(!this.state)
			return
	},
	onClick: function (btn) {this.state = !this.state
    file.write(logfile, "[Log] >> InGame >> " + this.name + " toggled!"); 
    },
	onRefresh: function (btn) {
		if(btn != null)btn.setText(this.name);
	}
};
	*/

file.write(logfile, "[Log] >> player modules loaded! ");

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

//CMD

Decency.getHighestPageNumber = function () {
	let cmds = CommandManager.cmdModules.length;
	let pages = 1;
	while(cmds > 8) {
		cmds -= 8;
		pages++;
	}
	return pages;
};
Decency.showHelpPage = function (page) {
	Decency.cmessage("Showing help page " + page + "/" + Decency.getHighestPageNumber());
	CommandManager.cmdModules.forEach(function (element, index, array) {
		if(index >= 8 * (page - 1) && index <= 8 * page - 1) {
			Decency.cmessage("." + element.alias[0] + " " + element.syntax + element.desc);
		}
	});
};

var help = {
	syntax: "",
	alias: ["help", "h", "?", "commands"],
    desc: " - shows all commands",
	type: ModuleType.command,
	isStateMod: function () {
		return false;
	},
	onCall: function (cmd) {
		try {

			if(cmd[0] == undefined || cmd[0] == null || cmd[0] == "1" || cmd[0] <= 0) {
				Decency.showHelpPage(1);
			} else {
				let pageInt = parseInt(cmd[0]);
				if(pageInt <= Decency.getHighestPageNumber()) {
					Decency.showHelpPage(pageInt);
				} else if(pageInt > Decency.getHighestPageNumber()) {
					Decency.showHelpPage(Decency.getHighestPageNumber());
				}
			}
		} catch(e) {
			Decency.showHelpPage(1);
		}

	}
};
Decency.registerModule(help);
var toggle = {
	syntax: "<module>",
	alias: ["toggle"],
    desc: " - can toggle the entered module",
	type: ModuleType.command,
	isStateMod: function () {
		return false;
	},
	onCall: function (cmd) {
		if(cmd[0] != undefined && cmd[0] != null && cmd[0] != "") {
			let shouldReturn = false;
			Decency.mods.forEach(function (entry, index, array) {
				if(entry.name.toLowerCase() == (cmd[0] + "").toLowerCase() && !shouldReturn) {
					if(entry.isStateMode()) {
						Decency.mods[index].state = !Decency.mods[index].state;
						Decency.mods[index].onRefresh(null);
						Decency.cmessage("Succesfully toggled module " + entry.name);
                          file.write(logfile, "[Log] >> InGame >> "  + entry.name + " toggled!");
					} else if(entry.isToggleAble()) {
						Decency.mods[index].onClick(null);
						Decency.mods[index].onRefresh(null);
						Decency.cmessage("Succesfully toggled module " + entry.name);
					} else {
						Decency.cmessage(entry.name + "can't be toggled!");
					}
					shouldReturn = true;
				}
			});
			if(shouldReturn) return;
			Decency.cmessage("Module " + cmd[0] + " can't be found!");
		} else {
			Decency.cmessage(".toggle <module>");
		}
	}
};
Decency.registerModule(toggle);
var settings = {
	syntax: "<module> // .bind <module>",
	alias: ["settings", "bind"],
    desc: " - you can change the settings or bind the button",
	type: ModuleType.command,
	isStateMod: function () {
		return false;
	},
	onCall: function (cmd) {
		if(cmd[0] != undefined && cmd[0] != null && cmd[0] != "") {
			let shouldReturn = false;
			Decency.mods.forEach(function (entry, index, array) {
				if(entry.name.toLowerCase() == (cmd[0] + "").toLowerCase() && !shouldReturn) {
                    Decency.showModDialog(entry);
				}
			});
			if(shouldReturn) return;
			
		} else {
			Decency.cmessage(".settings <module>");
		}
	}
};
Decency.registerModule(settings);
var debug = {
	syntax: "",
	alias: ["debug"],
    desc: " - shows world info",
	type: ModuleType.command,
	isStateMod: function () {
		return false;
	},
	onCall: function (cmd) {
     try{
         Decency.cmessage("Players: " + Server.getAllPlayers().length + ", Mobs: " + Utils.Entity.getAll().length + ", IP: " + Server.getAddress() + ", Port: " + Server.getPort());
    file.write(logfile, "[Log] >> Players: " + Server.getAllPlayers().length + ", Mobs: " + Utils.Entity.getAll().length + ", IP: " + Server.getAddress() + ", Port: " + Server.getPort());
        }catch(e) {
			file.write(logfile, "[Log] ERROR >> .debug error >> cannot get boolean / code not working!");
		}
	}
};
Decency.registerModule(debug);
var dev = {
	syntax: "",
	alias: ["dev"],
    desc: " - shows cheat info",
	type: ModuleType.command,
	isStateMod: function () {
		return false;
	},
	onCall: function (cmd) {
     try{
         Decency.cmessage("Total modules: "+ Utils.modsCount + " cheat version: 1.00 BETA");
    file.write(logfile, "[Log] >> Total modules: "+ Utils.modsCount + " cheat version: 1.00 BETA");
        }catch(e) {
			file.write(logfile, "[Log] ERROR >> .dev error >> cannot get boolean / code not working!");
		}
	}
};
Decency.registerModule(dev);//Utils.modsCount
var clear = {
	syntax: "",
	alias: ["clearchat"],
    desc: " - clear your chat",
	type: ModuleType.command,
	isStateMod: function () {
		return false;
	},
	onCall: function (cmd) {
     try{
        clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
  clientMessage("                                       ");
         file.write(logfile, "[Log] >> InGame >> chat cleared!");
        }catch(e) {
			file.write(logfile, "[Log] ERROR >> .clear error >> cannot clear chat!");
		}
	}
};
Decency.registerModule(clear);

/*
var command = {
	syntax: "<args>",
	alias: ["aliases"],
	type: ModuleType.command,
	isStateMod: function () {
		return false;
	},
	onCall: function (cmd) {
		
	}
};

*/

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

file.write(logfile, "[Log] >> chat modules loaded!");

//Menu open Button
var menuBtn;
var moving = false;
var dx = 0;
var dy = 0;
var mPosX = ctx.getWindowManager()
	.getDefaultDisplay()
	.getWidth() / 16 * 5;
//Main Menu
var mwidth = ctx.getWindowManager()
	.getDefaultDisplay()
	.getWidth() / 1000 * 100;
var width123 = ctx.getWindowManager().getDefaultDisplay().getWidth() / 3;
var mwidth1 = ctx.getWindowManager()
	.getDefaultDisplay()
	.getWidth() / 1000 * 113;
var mwidth2 = ctx.getWindowManager()
	.getDefaultDisplay()
	.getWidth() / 1000 * 113 / 3;
var mheight = ctx.getWindowManager()
	.getDefaultDisplay()
	.getHeight() / 28 * 8;
var mheight1 = ctx.getWindowManager()
	.getDefaultDisplay()
	.getHeight() / 2;
var menu;

var styledBtn = function () {
	let defaultBtn = new Button(ctx);
	defaultBtn.setBackground(Serrte1);
	return defaultBtn;
}

var modBtn = function (mod) {
	let btn = new Button(ctx);
	btn.setTransformationMethod(null);
	
		btn.setBackground(null);
		btn.setTextColor(android.graphics.Color.WHITE);
        btn.setTextSize(9);
    	btn.setTypeface(font);

	btn.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function (viewarg) {
			mod.onClick(btn);
			mod.onRefresh(btn);
			
				if(mod.isStateMode())
					modButtonLayout.setBackground(Decency.getStyledBtnBackground(mod.state, true));
				else
					modButtonLayout.setBackground(Decency.getStyledBtnBackground(false, false));

		}
	}));
    btn.setOnLongClickListener(new android.view.View.OnLongClickListener( {
onLongClick: function (v, t) {
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
						.vibrate(60);
					Decency.showModDialog(mod);
					menu.dismiss();
					return true;
}
})); 

	let modButtonLayout = new LinearLayout(ctx);
	modButtonLayout.setOrientation(LinearLayout.HORIZONTAL);

		if(mod.isStateMode())
			modButtonLayout.setBackground(Decency.getStyledBtnBackground(mod.state, true));
		else
			modButtonLayout.setBackground(Decency.getStyledBtnBackground(false, false));

	let modButtonLayoutLeft = new LinearLayout(ctx);
	modButtonLayoutLeft.setOrientation(1);
	modButtonLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(mwidth1, mheight / 3));
	modButtonLayout.addView(modButtonLayoutLeft);

	

	modButtonLayoutLeft.addView(btn);

	mod.onRefresh(btn);
	return modButtonLayout;
};
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
function dip2px(dips) {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	return Math.ceil(dips * ctx.getResources()
		.getDisplayMetrics()
		.density);
}


let Serrte1 = new android.graphics.drawable.GradientDrawable();
                 Serrte1.setColor(android.graphics.Color.argb(120, 0, 0, 0));
                Serrte1.setStroke(dip2px(2), android.graphics.Color.WHITE);




function getList(category) {
	let lay = new android.widget.TableLayout(ctx);

	let currow;
	Decency.mods.forEach(function (entry, index, array) {
             if(entry.type != ModuleType.cmd && entry.category == category || (category == ModCategory.SPECIAL && entry.type == ModuleType.special)     ) {
                 
                 let btn = new Button(ctx);
                 btn.setTransformationMethod(null);
		          	btn.setText(entry.name);
			        if(entry.isStateMode() && entry.state){
				    btn.setBackgroundColor(android.graphics.Color.argb(210, 0, 200, 0));
                        btn.setTextColor(android.graphics.Color.rgb(255, 0, 0));
                    }else{ if(entry.isStateMode()){
                    btn.setBackgroundColor(android.graphics.Color.argb(80, 0, 0, 0));
                        btn.setTextColor(android.graphics.Color.rgb(255, 255, 255));
                    }else{
		     		btn.setBackgroundColor(android.graphics.Color.argb(210, 230, 150, 30));
                        btn.setTextColor(android.graphics.Color.rgb(0, 255, 0));
                    } }
			        btn.setOnClickListener(new android.view.View.OnClickListener({
			    	onClick: function (viewarg) {
					entry.onClick(new modBtn(Decency.mods[index]));
					entry.onRefresh(new modBtn(Decency.mods[index]));
				
				}
			}));
                btn.setOnLongClickListener(new android.view.View.OnLongClickListener({
				onLongClick: function (v, t) {
					ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE)
						.vibrate(60);
					Decency.showModDialog(entry);
					menu.dismiss();
					return true;
				}
			}));
                
                 
				if(index % 2 == 1) {
					if(!currow) currow = new android.widget.TableRow(ctx);
					currow.addView(new modBtn(Decency.mods[index]));
					lay.addView(currow);
					currow = null;

				} else {
					currow = new android.widget.TableRow(ctx);
					currow.addView(new modBtn(Decency.mods[index]));

				}
			} else {

			}
		
	});
	if(currow != null) lay.addView(currow);
	let scrollView = new android.widget.ScrollView(ctx);
	scrollView.addView(lay);
	return scrollView;
}

function showMenu() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				let categoryHolder = new android.widget.LinearLayout(ctx);
                categoryHolder.setOrientation(1);
				categoryHolder.setId(492817);
				let categoryParam = new android.widget.LinearLayout.LayoutParams(mwidth, mheight, 1);
				let currentCategory = ModCategory.COMBAT;
				categoryHolder.setBackground(Serrte);
				let enabGradient = new android.graphics.drawable.GradientDrawable();
				enabGradient.setStroke(dip2px(2), android.graphics.Color.GREEN);
				let categoryBtn = function (category) {
					let btn = new Button(ctx);
					btn.setText(ModCategory.toName(category));
					btn.setTextColor(android.graphics.Color.WHITE);
					btn.setTextSize(9);
                    btn.setTypeface(font);
					btn.setBackground(currentCategory == category ? enabGradient : null);
					btn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (v) {
							currentCategory = category;
							toplayout.removeView(categoryHolder);
							categoryHolder.removeAllViews();
							cateBtns = [
								categoryBtn(ModCategory.COMBAT),
								categoryBtn(ModCategory.MOVE),
								categoryBtn(ModCategory.MISC),
								categoryBtn(ModCategory.PLAYER)
							];
							cateBtns.forEach(function (entry) {
                                categoryHolder.addView(entry, categoryParam);
								categoryParam = new android.widget.LinearLayout.LayoutParams(mwidth, mheight, 1);
							});
							lparam = new android.widget.RelativeLayout.LayoutParams(mwidth, dip2px(300));
							lparam.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
							lparam.addRule(android.widget.RelativeLayout.CENTER_HORIZONTAL);
							toplayout.addView(categoryHolder, lparam);
							toplayout.removeView(caterList);
							caterList = getList(currentCategory);
                            caterList.setPadding(4,4,4,4);
							lparam = new android.widget.RelativeLayout.LayoutParams(mwidth, dip2px(300));
							lparam.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
							lparam.addRule(android.widget.RelativeLayout.RIGHT_OF, categoryHolder.getId());
							lparam.addRule(android.widget.RelativeLayout.CENTER_HORIZONTAL);
							toplayout.addView(caterList, lparam);

						}
					}))
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
					return btn;
				};
				let cateBtns = [
					            categoryBtn(ModCategory.COMBAT),
								categoryBtn(ModCategory.MOVE),
								categoryBtn(ModCategory.MISC),
								categoryBtn(ModCategory.PLAYER)
				];
				cateBtns.forEach(function (entry) {
                                categoryHolder.addView(entry, categoryParam);
								categoryParam = new android.widget.LinearLayout.LayoutParams(mwidth, mheight, 1);
				});



				let caterList = getList(currentCategory);
                 caterList.setPadding(4,4,4,4);


				let toplayout = new android.widget.RelativeLayout(ctx);
				toplayout.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						menu.dismiss();
						showMenuBtn();
					}
				}));

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

                let Serrte1 = new android.graphics.drawable.GradientDrawable();
                 Serrte1.setColor(android.graphics.Color.argb(120, 0, 0, 0));
                Serrte1.setStroke(dip2px(2), android.graphics.Color.WHITE);
                toplayout.setBackground(Serrte1);
				

				lparam = new android.widget.RelativeLayout.LayoutParams(mwidth, dip2px(300));
							lparam.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
							lparam.addRule(android.widget.RelativeLayout.CENTER_HORIZONTAL);
							toplayout.addView(categoryHolder, lparam);
				caterList = getList(currentCategory);
							lparam = new android.widget.RelativeLayout.LayoutParams(mwidth, dip2px(300));
							lparam.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
							lparam.addRule(android.widget.RelativeLayout.RIGHT_OF, categoryHolder.getId());
							lparam.addRule(android.widget.RelativeLayout.CENTER_HORIZONTAL);
							toplayout.addView(caterList, lparam);
                caterList.setPadding(4,4,4,4);
				menu = new android.widget.PopupWindow(toplayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/2, true);
					var time = 1;
                menu.setAnimationStyle(android.R.style.Animation_Dialog);
				menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
			} catch(e) {
				Decency.ctoast("Menu Error(" + e.lineNumber + "): " + e);
			}
		}
	}));
}
file.write(logfile, "[Log] >> menu created!");

function refreshMenu() {
	if(mlist != null) {
		mlist.removeAllViewsInLayout();
		mlist.addView(Decency.generateMenu(search.getText() + ""));
	}
}
Decency.mt = ModuleType;

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

function showMenuBtn() {
	menuBtn = new android.widget.TextView(ctx);
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
                menuBtn.setTextSize(17);
				menuBtn.setText(android.text.Html.fromHtml('<b><font color="blue">D</font></b><b><font color="white">ecency</font></b>'));
				menuBtn.setTextColor(android.graphics.Color.WHITE);
                menuBtn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), android.graphics.Color.BLACK);
				menuBtn.setTypeface(font);
				//menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(bg));
				menuBtn.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
						showMenu();
						GUI.dismiss();
						GUI = null;
					}
				}));
				

				if(GUI != null && GUI.isShowing()) GUI.dismiss();
				GUI = new android.widget.PopupWindow(menuBtn, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
				GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                var time = 1;
                GUI.setAnimationStyle(android.R.style.TextAppearance_DeviceDefault_Widget_DropDownItem);
				GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 10, 10);
			} catch(err) {
				simpleToast(err);
			}
		}
	}));
}
showMenuBtn();
file.write(logfile, "[Log] >> button created!");
function rptask() {
	var t = new java.lang.Thread(new java.lang.Runnable({
		run: function () {
            
			while(true) {
				nx = getPlayerX();
				ny = getPlayerY();
				nz = getPlayerZ();

				var randString = "";

				

				if(Utils.Render.initted)
					Utils.Render.glSurface.requestRender();
				Decency.mods.forEach(function (entry, index, array) {
					try {
						if(entry.OnModTick && (entry.state || entry.isStateMode() == false)) entry.OnModTick();
					} catch(e) {}

				});
				if(Decency.inGame == true && Player.getEntity() != -1 && getPlayerEnt() != 0) {
					if(Utils.Player.onGround()) Utils.flyTick = 0;
					else Utils.flyTick++;
					Utils.Vel.lastX = Entity.getVelX(Player.getEntity());
					Utils.Vel.lastY = Entity.getVelY(Player.getEntity());
					Utils.Vel.lastZ = Entity.getVelZ(Player.getEntity());
				}
				Utils.Pos.lastX = getPlayerX();
				Utils.Pos.lastY = getPlayerY();
				Utils.Pos.lastZ = getPlayerZ();

				tick1++;
				if(tick1 > 50) tick1 = 0;

				ctx.runOnUiThread(new java.lang.Runnable( {
					run: function () {

						if((GUI != null && GUI.isShowing()) && (menu != null && menu.isShowing())) GUI.dismiss();
						if((GUI == null || !GUI.isShowing()) && (menu == null || !menu.isShowing()) && (dialog == null || !dialog.isShowing())) {
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
							showMenuBtn();
						}
						
						
						
					}
				}));
				java.lang.Thread.sleep(15);
			}
		}
	}));
	t.start();
}
rptask();

function rptask2() {
	ctx.runOnUiThread(new java.lang.Runnable({
        run: function () {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function () {
                    
				Decency.mods.forEach(function (entry, index, array) {
					try {
						if(entry.onAvrTick && (entry.state || entry.isStateMode() == false)) entry.onAvrTick();
					} catch(e) {}
/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/
                    
                    
				});
				nx = getPlayerX();
                ny = getPlayerY();
                nz = getPlayerZ();
                    eval(rptask2())
                }
            }), 1000)
        }
    }))
}
rptask2();


Decency.loadModsAnim(0);
Utils.Render.init();

function chatHook(text) {

	if(text.charAt(0) == ".") {
		preventDefault();
		try {
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
				.nativeSetTextboxText("");
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
				.updateTextboxText("");
		} catch(e) {
		}
		CommandManager.onCommand(text.substring(1, text.length));
	}
}
this.Item.getEnchantType = function (id) {
	if(id == 340) return 0;
	if(Item.getUseAnimation(id) == UseAnimation.bow) return 1;
	if(id == 258 || id == 271 || id == 275 || id == 279 || id == 286) return 2;
	if(id == 290 || id == 291 || id == 292 || id == 293 || id == 294) return 2;
	if(id == 257 || id == 270 || id == 274 || id == 278 || id == 285) return 2;
	if(id == 256 || id == 269 || id == 273 || id == 277 || id == 284) return 2;
	if(id == 359 || id == 259) return 2;
	if(id == 267 || id == 268 || id == 272 || id == 276 || id == 283) return 3;
	if(id >= 298 && id <= 317) return 4;
	if(id == 346) return 5;
};



function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
	Decency.mods.forEach(function (entry, index, array) {
		try {
			entry.onUseItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage);
		} catch(e) {}

	});

}

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/


function entityAddedHook(ent) {
	if(Entity.getMobSkin(ent) != "mob/char.png") Utils.Entity.allEntitys.push(ent);
	else Utils.Entity.charEnts.push(ent);
	//clientMessage("Entity added count:"+Utils.Entity.getAll().length);
}
var previousVisualRoadPart=[];
var visualRoadTimer=0;
function visualRoad(){
visualRoadTimer++;
if(visualRoadTimer>=5){
visualRoadTimer=0;
var x=Math.floor(getPlayerX());
var y=Math.floor(getPlayerY());
var z=Math.floor(getPlayerZ());
for(var i=0;i<previousVisualRoadPart.length;i++){
Level.setTile(previousVisualRoadPart[i][0],previousVisualRoadPart[i][1],previousVisualRoadPart[i][2],0);
};
previousVisualRoadPart=[];
for(var xx=x-1;xx<=x+1;xx++){
for(var zz=z-1;zz<=z+1;zz++){
if(Level.getTile(xx,y-2,zz)==0){
Level.setTile(xx,y-2,zz,95);
previousVisualRoadPart.push([xx,y-2,zz]);
}}}}};
function entityRemovedHook(ent) {
	//clientMessage("Entity removed("+Entity.getNameTag(ent));
	Utils.Entity.charEnts.forEach(function (entry, index, array) {
		if(entry == ent) Utils.Entity.charEnts.splice(index, 1);

	});
	Utils.Entity.allEntitys.forEach(function (entry, index, array) {
		if(entry == ent) Utils.Entity.allEntitys.splice(index, 1);

	});
}
function entityHurtHook(att, vic, hearts){
	Decency.mods.forEach(function (entry, index, array) {
		try {
			entry.onHurt(att, vic, hearts);
		} catch(e) {}

	});
}
function screenChangeHook(screen) {
	Utils.currentScreen = screen;
	//simpleToast(screen);
}
 

function destroyBlock(x, y, z, side)
{
Decency.mods.forEach(function (entry, index, array) {
		try {
			entry.onDestroyBlock(x, y, z, side);
		} catch(e) {}

	});
}

function startDestroyBlock(x, y, z, side)
{
Decency.mods.forEach(function (entry, index, array) {
		try {
			entry.onStartDestroyBlock(x, y, z, side);
		} catch(e) {}

	});
}
var defaultDestroyTimeAll = [
    null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

Block.setDestroyTimeAll = function(destroyTime) {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, destroyTime);
    }
}

Block.setDestroyTimeDefaultAll = function() {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, defaultDestroyTimeAll[i]);
    }
}
function toDirectionalVector(vector, yaw, pitch) { //some parts of this function are made by @zhuowei
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function serverMessageReceiveHook(str){
	Decency.mods.forEach(function (entry, index, array) {
		try {
			entry.onChatReceive(str);
		} catch(e) {}

	});
}

function attackHook(att, vic) {
	Decency.mods.forEach(function (entry, index, array) {
		try {
			entry.onAttack(att, vic);
		} catch(e) {}

	});
}

/*******************************************\
|             Decency BETA                  |
|      Orbita Project  &&  YANO Team        |
|           created by autyn                |
|           thx RealVirus325                |
|            thx GodSoft029                 |
|         vk.com/club171149716              |
\*******************************************/

function modTick() {

    
                        
	Decency.mods.forEach(function (entry, index, array) {
		try {
			if(entry.hasOwnProperty("onModTick") && (entry.state || entry.isStateMode() == false)) entry.onModTick();
		} catch(e) {}

	});
}
    file.write(logfile, "[Log] >> script succesfully loaded! Enjoy!");
    file.write(logfile, "[Log] >> InGame logs:");
    file.write(logfile, " ");