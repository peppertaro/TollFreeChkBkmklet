(()=>{
    var PC = ["15rem","10rem","5rem","250","-120"],
        SP =["40vw","35vw","25vw","50vw","-40vw"],
        K = !navigator.userAgent.match(/Android|iPhone|iPod|BlackBerry|Opera Mini|IEMobile/i)? PC : SP,
        vls=document.querySelectorAll("[class*=tel],[class*=number],[class*=Tel]"),
        fnc = (xy,f1,f2,fx,fy,tc,dc,ds,ic,ch)=>{
            return `<svg xmlns="http://www.w3.org/2000/svg"version="1"viewBox="0 -900 900 900" width=${xy} height=${xy}><text fill=${tc} font-family="Century Gothic" font-size=${f1}><tspan><tspan x="150"y="-200">${ds}</tspan></tspan></text><text fill=${dc} font-family="Century Gothic" font-size=${f2}><tspan x=${fx} y=${fy}>for SMARTalk</tspan></text><g fill=${ic}><path d="M416-765.4a380 380 0 0 0-12 2.5c-2.5.7-6.3 1.5-8.5 2-7.1 1.4-19.2 5.2-23.8 7.5-1.6.8-3.3 1.4-3.8 1.4-.9 0-13.2 5.4-15.9 7-.8.5-3.7 2.1-6.5 3.5-27 14.1-56.5 40.4-74.5 66.5-18.5 26.8-29.5 52.7-35.9 85-2.2 11.2-3.3 30.7-2.7 50 .6 20.9 2.1 30.1 8.3 52 5.1 18.1 15 39.6 25.8 56 13.3 20.2 32.4 40.5 51.6 55.1 6.5 4.9 12 8.9 12.3 8.9.3 0 2.4 1.3 4.8 2.9 6.5 4.3 17.1 10 25.1 13.4 2 .9 5.2 2.3 7 3 7.8 3.4 12.6 5 27.9 9.2 41.9 11.3 95.9 7.7 135.3-9 14.1-6 24-11.1 32.3-16.6 2.4-1.6 4.5-2.9 4.8-2.9.3 0 5.8-4 12.3-8.9 19.2-14.6 38.3-34.9 51.6-55.1 10.9-16.5 20.7-37.8 25.8-56 6.2-21.9 7.7-31.1 8.3-52 1.2-38.3-3-62.8-16.1-94.3-11.1-26.9-27.8-51.1-49.6-72.2-12.5-12-17.2-15.9-29.3-23.9-12.8-8.4-12.5-8.3-18.1-11.1-2.7-1.4-5.7-3-6.5-3.5-2.7-1.6-15-7-15.9-7-.5 0-2.2-.6-3.8-1.4-4.6-2.3-16.7-6.1-23.8-7.5-2.2-.5-6-1.3-8.5-2-14.1-3.4-21.4-4.1-45.8-4-16.8 0-27.1.5-32.2 1.5zm60.9 8.9c16.1 2.6 29.1 5.7 38.6 9.2 2.2.9 5.8 2.2 8 3 21.1 7.8 43.9 21.4 61 36.3 7.6 6.7 23.2 22.8 27.7 28.6 5 6.5 13 18.2 14.1 20.4.4.8 1.6 2.8 2.6 4.5 2 3.1 8.2 15.4 10.7 21.2 6.2 14.5 7.9 19.4 11.7 34.8 4.3 17 5.1 24.7 5 48.5 0 23.9-.2 26.4-4.9 47.5-5.8 26-20.3 57-36.2 77-.4.5-2.8 3.7-5.4 7-5.8 7.6-19.2 21.1-28.2 28.4-5.6 4.6-18.3 13.5-28.2 19.8-3 1.9-21.4 10.8-26.4 12.8-2.5.9-5.6 2.2-7 2.7-24.6 9.6-57.6 14.2-86.3 11.9-21.2-1.7-40-5.8-55.7-11.9-1.4-.5-4.5-1.8-7-2.7-4.4-1.7-22.5-10.5-26.5-12.8-5.2-3.1-22.5-15.1-27-18.8-12-9.9-24.5-22.9-33.2-34.4-10.4-13.7-15.8-22.5-22.5-36.5-7.6-15.9-12-28.3-15.2-42.5-4.7-21.1-4.9-23.6-4.9-47.5-.1-23.8.7-31.5 5-48.5 3.8-15.4 5.5-20.3 11.7-34.8 2.5-5.8 8.7-18.1 10.7-21.2 1-1.7 2.2-3.7 2.6-4.5.9-2 8.9-13.7 12.7-18.5 8.4-10.9 25.2-27.7 37.6-37.6 13.3-10.5 35.6-22.9 52.5-29.2 2.2-.8 5.8-2.1 8-3 9.1-3.3 22.1-6.5 37.5-9.1 12-2 44.7-2 56.9-.1z"/><path d="M340.9-647.9c-5.6 3-22.3 20.7-25 26.5-2 4.2-2.3 6.5-2.3 16.4 0 8.3.5 13.1 1.8 17 1.6 5 10 22.8 12.9 27.4C332-554.7 342-540 343-539c.3.3 3.4 4.1 6.9 8.5 7.5 9.3 25.7 27.8 35.1 35.6 3.6 3 6.7 5.7 7 6 1.8 2 21.7 16.2 27.5 19.5 6.9 4.1 21.2 10.7 27.1 12.6 6 1.9 8.9 2.1 22.4 2 12.2-.1 16.7.2 21 1.5 4 1.3 9 1.8 18 1.8 12.9 0 18.9-1.2 30.8-5.8 5.1-2 12.2-7.3 12.2-9.1 0-.5.6-1.7 1.3-2.5.8-.9 1.9-3.6 2.6-6 .9-3 2.7-5.7 6.3-9 2.8-2.5 6.3-6.9 7.9-9.6 2.4-4.2 2.9-6.1 2.9-12.3 0-12.2-3.4-16.7-21-27.2-15.2-9-17.7-12-18.5-22.1-.8-9-2.4-13.8-6-18.4-3.5-4.3-10.4-7.5-16.3-7.5-4.7 0-9-2.8-11.3-7.2-1.6-3.1-1.9-5.9-1.9-17.4 0-15.3.9-18.3 6.6-23.4l3.5-3h32.3c31.1 0 32.4.1 34.9 2.1 4.2 3.2 4.9 7.6 4.5 27.1-.4 21.1-.2 20.8-11.6 23.3-8.5 1.8-15.7 6-21.7 12.6-4.1 4.6-4.4 6.3-1 8.5 2.4 1.6 2.6 1.5 8.9-4.3 5.3-4.8 7.5-6.1 12.9-7.6 3.6-.9 7.5-1.7 8.7-1.7 3.1 0 7.7-3.8 10.2-8.4 2.2-3.9 2.3-5.2 2.3-25.1 0-19.1-.2-21.3-1.9-24-3.2-5-5.9-7.6-9.8-9.6-3.4-1.8-6.2-1.9-36.3-1.9-30.8 0-32.8.1-36.6 2-5.9 3.1-11.2 9-12.9 14.6-2.2 7.2-2 33.5.3 38.5 3.4 7.6 12.7 13.9 20.4 13.9 8.1 0 13.2 6.8 13.3 17.8 0 11.3 5.8 18.7 22.3 28.5 15.2 9.1 17.5 12 16.8 22.2-.6 8.5-7.2 14.1-8.6 7.3-2.3-10.2-11.1-18.8-19.3-18.8-5.5 0-7.6 1.1-11.2 6.2-3.6 5-4 11.3-1.1 17.9 3.1 6.9 8.2 10.8 16.9 12.8 4.3 1.1 5.2 1.7 5.2 3.5 0 2.5-3.9 6.5-8.5 8.9-4.3 2.2-13.7 4.5-23.5 5.7-7.7 1-9.4.9-17.5-1.1-7.5-1.9-11.8-2.3-26.5-2.4-13.7 0-18.3-.4-21-1.6-1.9-.9-5.5-2.5-8-3.5-5.4-2.2-22.8-12.6-32.1-19.2-20-14.2-43.3-37.1-59.1-58.1-1.5-2-3.2-4.1-3.7-4.7-1.5-1.9-8.5-12.8-9.8-15.4-.4-.8-1.8-3.5-3.3-6-5-8.6-8.2-17.6-9.6-26.5-2.2-15 .1-20.8 13.8-33.8 9-8.5 9.4-8.7 14.1-8.7h4.9l13.9 13.8 13.9 13.8v4.9c0 4.2-.6 5.6-4.4 10.4-7 9-8 11.5-8 21.1-.1 9.7.7 11.8 10.8 27.5 3.7 5.8 22.9 25.5 24.8 25.5.6 0 2.7 1.3 4.7 2.8 2 1.5 6.4 4.3 9.9 6.1 5.7 3 7.2 3.3 14.6 3.3 9.1 0 13.8-1.8 22.4-8.7 3.7-3 5.1-3.5 9.4-3.5h5l12.9 12.7c13.8 13.5 17.9 19.5 15.9 23.3-.6 1.1-2.7 3.6-4.6 5.5-4.4 4.5-4.5 8.8-.2 9.3 2.1.3 3.7-.7 7.4-4.5 6.6-6.9 7.6-10.4 5.3-18.8-.9-3.1-4.3-7.1-15.3-18.3-7.7-7.9-15.8-15.2-17.8-16.3-2.4-1.2-5.8-1.9-9.5-1.9-6.1 0-5.7-.2-19.4 9.5-3.6 2.6-5 2.9-11.3 2.9-7 0-8.4-.4-17.1-5.7-4.7-2.9-17.3-12.8-20.1-15.8-5.2-5.7-13.5-17.4-15.3-21.6-.6-1.1-1.4-2.4-1.9-2.7-1.5-.9-2.4-9.8-1.6-15.1.5-3.4 1.8-6.2 4.8-9.9 2.2-2.8 4.9-6.6 5.9-8.3 2.2-4 2.2-12.5 0-16.6-2.6-4.7-27.2-29.4-31.6-31.7-4.9-2.6-12.9-2.5-17.8.1zm200.5 145.4c3.2 3.8 6.4 12 5.8 14.7-.8 3.8-10.2 1-14.6-4.2-2.8-3.4-3.6-10.6-1.4-12.8 2.4-2.4 7.1-1.4 10.2 2.3z"/><path d=${ch}/></g></svg>`
        },
        TF = ["#06f","#003380","TollFREE","#0cf",'M551.4-609.5c-4.8,4.7-9.3,8.5-10.1,8.5-.7,0-3-1.6-5-3.5s-4.1-3.5-4.8-3.5c-1.5,0-4.5,3.3-4.5,4.9,0,.7,2.5,3.9,5.7,7.2,8.2,8.6,8.7,8.4,22.3-5.3,6-6.1,11-11.9,11-12.9,0-1.8-2.7-3.9-5-3.9-.6,0-4.9,3.8-9.6,8.5z'],
        NF = ["#f60","#520","NotFREE","#a40",'M522.46-620.78c-1.53,2.3,0,7.26,3.44,11.08,5.35,6.11,5.35,7.26-.38,12.99-8.02,8.02-3.06,13.37,6.5,7.26,6.1-3.82,9.16-3.82,15.28,0,9.55,6.11,14.52.76,6.5-7.26-5.74-5.73-5.74-6.88-.39-13,8.79-9.54,3.06-17.18-6.5-8.78-6.87,6.11-7.64,6.11-14.51,0-4.97-4.58-8.03-5.35-9.94-2.3z'],
        mg = (s,src,v)=>{
            var e= K.concat(src);
            s.innerHTML=fnc.apply(null,e);
            v.parentNode.insertBefore(s, v);
        };
    for(var i=0;i<vls.length;i++){
        if(vls[i].querySelectorAll("[class*='tel'],[class*='number']").length>0){ continue; }
        var bal = document.createElement('div');
            bal.className="bal";
        if(/050-(?: 521[0-9]|52[2-9][0-9]|5[3-4][0-9]{2}|55[0-2][0-9]|553[0-9]|557[0-9]|55[8-9][0-9]|560[0-9]|577[7-9]|57[8-9][0-9]|58[0-8][0-9]|589[0-9]|800[0-7]|8009|801[0-4]|8016|8019|802[0-2]|802[6-7]|803[0-1]|803[4-8])/.test(vls[i].innerText)){		
            mg(bal,TF,vls[i]);
        }else if(vls[i].innerText.indexOf("0")>-1){
            mg(bal,NF,vls[i]);
        }
    };
})();