var gdjs;(function(L){let m;(function(C){let j;(function(r){r.setCameraX=function(t,e,n,s){!t.hasLayer(n)||t.getLayer(n).setCameraX(e,s)},r.setCameraY=function(t,e,n,s){!t.hasLayer(n)||t.getLayer(n).setCameraY(e,s)},r.getCameraX=function(t,e,n){return t.hasLayer(e)?t.getLayer(e).getCameraX():0},r.getCameraY=function(t,e,n){return t.hasLayer(e)?t.getLayer(e).getCameraY():0},r.getCameraWidth=function(t,e,n){return t.hasLayer(e)?t.getLayer(e).getCameraWidth():0},r.getCameraHeight=function(t,e,n){return t.hasLayer(e)?t.getLayer(e).getCameraHeight():0},r.getCameraBorderLeft=function(t,e,n){return t.hasLayer(e)?r.getCameraX(t,e,n)-r.getCameraWidth(t,e,n)/2:0},r.getCameraBorderRight=function(t,e,n){return t.hasLayer(e)?r.getCameraX(t,e,n)+r.getCameraWidth(t,e,n)/2:0},r.getCameraBorderTop=function(t,e,n){return t.hasLayer(e)?r.getCameraY(t,e,n)-r.getCameraHeight(t,e,n)/2:0},r.getCameraBorderBottom=function(t,e,n){return t.hasLayer(e)?r.getCameraY(t,e,n)+r.getCameraHeight(t,e,n)/2:0},r.showLayer=function(t,e){if(!!t.hasLayer(e))return t.getLayer(e).show(!0)},r.hideLayer=function(t,e){if(!!t.hasLayer(e))return t.getLayer(e).show(!1)},r.layerIsVisible=function(t,e){return t.hasLayer(e)&&t.getLayer(e).isVisible()},r.setCameraRotation=function(t,e,n,s){if(!!t.hasLayer(n))return t.getLayer(n).setCameraRotation(e,s)},r.getCameraRotation=function(t,e,n){return t.hasLayer(e)?t.getLayer(e).getCameraRotation(n):0},r.getCameraZoom=function(t,e,n){return t.hasLayer(e)?t.getLayer(e).getCameraZoom(n):0},r.setCameraZoom=function(t,e,n,s){if(!!t.hasLayer(n))return t.getLayer(n).setCameraZoom(e,s)},r.centerCamera=function(t,e,n,s,o){if(!t.hasLayer(s)||e==null)return;let u=0,i=0;if(n&&!e.hasNoForces()){const a=e.getAverageForce(),f=e.getElapsedTime(t)/1e3;u=a.getX()*f,i=a.getY()*f}const g=t.getLayer(s);g.setCameraX(e.getCenterXInScene()+u,o),g.setCameraY(e.getCenterYInScene()+i,o)},r.centerCameraWithinLimits=function(t,e,n,s,o,u,i,g,a){r.centerCamera(t,e,i,g,a),r.clampCamera(t,n,s,o,u,g,a)},r.clampCamera=function(t,e,n,s,o,u,i){if(!t.hasLayer(u))return;const g=t.getLayer(u),a=g.getCameraWidth(i)/2,f=g.getCameraHeight(i)/2,c=e+a,h=s-a,p=n+f,d=o-f,B=c<h?L.evtTools.common.clamp(g.getCameraX(i),c,h):(c+h)/2,X=p<d?L.evtTools.common.clamp(g.getCameraY(i),p,d):(p+d)/2;g.setCameraX(B,i),g.setCameraY(X,i)},r.setLayerEffectDoubleParameter=function(t,e,n,s,o){if(!!t.hasLayer(e))return t.getLayer(e).setEffectDoubleParameter(n,s,o)},r.setLayerEffectStringParameter=function(t,e,n,s,o){if(!!t.hasLayer(e))return t.getLayer(e).setEffectStringParameter(n,s,o)},r.setLayerEffectBooleanParameter=function(t,e,n,s,o){if(!!t.hasLayer(e))return t.getLayer(e).setEffectBooleanParameter(n,s,o)},r.enableLayerEffect=function(t,e,n,s){!t.hasLayer(e)||t.getLayer(e).enableEffect(n,s)},r.layerEffectEnabled=function(t,e,n){return t.hasLayer(e)?t.getLayer(e).isEffectEnabled(n):!0},r.setLayerTimeScale=function(t,e,n){if(!!t.hasLayer(e))return t.getLayer(e).setTimeScale(n)},r.getLayerTimeScale=function(t,e){return t.hasLayer(e)?t.getLayer(e).getTimeScale():1},r.setLayerDefaultZOrder=function(t,e,n){if(!!t.hasLayer(e))return t.getLayer(e).setDefaultZOrder(n)},r.getLayerDefaultZOrder=function(t,e){return t.hasLayer(e)?t.getLayer(e).getDefaultZOrder():0},r.setLayerAmbientLightColor=function(t,e,n){if(!t.hasLayer(e)||!t.getLayer(e).isLightingLayer())return;const s=n.split(";");if(!(s.length<3))return t.getLayer(e).setClearColor(parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10))}})(j=C.camera||(C.camera={}))})(m=L.evtTools||(L.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=cameratools.js.map