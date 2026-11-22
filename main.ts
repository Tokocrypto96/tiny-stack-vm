import{readFileSync as R,writeFileSync as W,mkdirSync as M,readdirSync as D}from"node:fs";
for(let d of D("/input")){
let b=`/input/${d}/`,z=`/output/${d}/`,P=R(b+"program.bin"),I=R(b+"input.bin"),S=new Int32Array(576),C=S.subarray(256),m=S.subarray(320),sp=0,cp=0,p=0,s=1e6,q=0,e=-1,o,c,x,a,w,t,r,O="",A,Y,u,n=P.length;
while(e<0){
if(!s||p>>>0>=n){e=!s?10:9;break}o=P[p];c="0Aq46:;?////////999999959995999/999/////////////PTTP0///////////58//////////////4414".charCodeAt(o)-48;if(!(c>=0)||p+(c>>4)>=n){e=!(c>=0)?5:9;break}s--;if(sp<(u=c>>2&3)||sp-u+(c&3)>256){e=sp<u?2:3;break}x=p;p=x+1+(c>>4);
if(o<2)o?S[sp++]=P[x+1]<<24>>24:e=0;if(o==2)S[sp++]=P.readInt32LE(x+1);if(o==3)sp--;if(o==4||o==6)S[sp]=S[sp-(o==4?1:2)],sp++;if(o==5)S.set([S[sp-1],S[sp-2]],sp-2);if(o==7)S.set([S[sp-2],S[sp-1],S[sp-3]],sp-3);
if(o>15&&o<35)(o==23||o==27)?S[sp-1]=(o==23?-S[sp-1]:~S[sp-1]):(w=S[--sp],a=S[sp-1],o>18&&o<23&&!w?e=4:(A=a>>>0,Y=w>>>0,S[sp-1]=[a+w,a-w,Math.imul(a,w),a/w,a%w,A/Y,A%Y,0,a&w,a|w,a^w,0,a<<w,a>>w,a>>>w,0,+(a==w),+(a<w),+(A<Y)][o-16]));
if(o>47&&o<53){if(o<51)(r=P.readInt16LE(x+1),o==48||(o==49)==!S[--sp])&&(p+=r);if(o>50)o==51?cp>63?e=7:(C[cp++]=p,p=P[x+1]|P[x+2]<<8):(cp?p=C[--cp]:e=8)}
if(o>63&&o<66)(a=S[sp-1])>>>0>255?e=6:o==64?S[sp-1]=m[a]:(m[a]=S[sp-2],sp-=2);
if(o>79&&o<82){t=o==80?""+S[--sp]:String.fromCharCode(S[--sp]&255);(O.length+t.length>65536)?e=11:O+=t}if(o>81)o==83?e=S[--sp]&255:S[sp++]=I[q++]??-1;}
M(z,{recursive:!0});W(z+"stdout.bin",O,"latin1");W(z+"exit.txt",""+e);}
