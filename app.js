const data = {
  gp: "GP Austria",
  session: "Prossimo weekend F1",
  target: "2026-06-26T13:00:00+02:00",
  circuit: "Red Bull Ring",
  track: "4.318 km · 71 giri · 10 curve",
  record: "Record gara 1:05.619",
  weather: "24°C · sereno · vento 9 km/h",
  drivers: [
    ["Antonelli","156 pt"],["Hamilton","115 pt"],["Russell","106 pt"],["Norris","98 pt"],
    ["Leclerc","91 pt"],["Piastri","84 pt"],["Verstappen","80 pt"],["Sainz","48 pt"]
  ],
  teams: [
    ["Mercedes","262 pt"],["Ferrari","206 pt"],["McLaren","182 pt"],["Red Bull","112 pt"],["Williams","65 pt"]
  ],
  timing: [
    ["01","RUS","LEADER","1:07.892","M"],["02","HAM","+1.842","1:08.116","H"],
    ["03","NOR","+3.104","1:08.221","M"],["04","LEC","+4.992","1:08.330","S"],["05","VER","+6.102","1:08.401","H"]
  ],
  races: ["Austria · 26/28 Giugno","Gran Bretagna · 03/05 Luglio","Belgio · 17/19 Luglio"]
};

function render(){
  document.getElementById("gpName").textContent = data.gp;
  document.getElementById("sessionText").textContent = data.session;
  document.getElementById("circuitName").textContent = data.circuit;
  document.getElementById("trackInfo").textContent = data.track;
  document.getElementById("recordInfo").textContent = data.record;
  document.getElementById("weather").textContent = data.weather;

  drivers.innerHTML = data.drivers.map((d,i)=>`<li><b>${String(i+1).padStart(2,"0")} ${d[0]}</b><span>${d[1]}</span></li>`).join("");
  teams.innerHTML = data.teams.map((d,i)=>`<li><b>${String(i+1).padStart(2,"0")} ${d[0]}</b><span>${d[1]}</span></li>`).join("");
  timing.innerHTML = data.timing.map(r=>`<div class="row"><b>${r[0]} ${r[1]}</b><span>${r[2]}</span><span>${r[3]}</span><span>${r[4]}</span></div>`).join("");
  races.innerHTML = data.races.map(r=>`<div class="race"><b>${r.split("·")[0]}</b><span>${r.split("·")[1] || ""}</span></div>`).join("");
}

function tick(){
  const left = Math.max(0, Math.floor((new Date(data.target) - new Date()) / 1000));
  d.textContent = Math.floor(left/86400);
  h.textContent = Math.floor((left%86400)/3600);
  m.textContent = Math.floor((left%3600)/60);
  s.textContent = left%60;
}

render();
tick();
setInterval(tick, 1000);
