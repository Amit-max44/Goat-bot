const si = require('systeminformation');
const fs = require("fs-extra");
const request = require("request");
const { execSync } = require("child_process");

module.exports = {
    config: {
        name: "system2",
        aliases: ["sys", "sysinfo", "systeminfo",],
        version: "1.4",
        author: "",
        countDown: 5,
        role: 0,
        shortDescription: "System Information",
        longDescription: "Displays detailed system information including CPU, Memory, Disk, OS, Installed Packages, Users, and Groups.",
        category: "info",
        guide: "{pn}"
    },

    byte2mb: function (bytes) {
        const units = ['BYTES', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0, n = parseInt(bytes, 10) || 0;
        while (n >= 1024 && ++l) n = n / 1024;
        return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
    },

    getInstalledPackages: function () {
        try {
            if (process.platform === "linux") {
                return execSync("dpkg-query -l | wc -l").toString().trim();
            } else if (process.platform === "win32") {
                return execSync("wmic product get name | find /c /v \"\"").toString().trim();
            } else {
                return "NOT SUPPORTED";
            }
        } catch {
            return "UNKNOWN";
        }
    },

    getTotalUsers: function () {
        try {
            if (process.platform === "linux") {
                return execSync("cat /etc/passwd | wc -l").toString().trim();
            } else if (process.platform === "win32") {
                return execSync("net user | find /c /v \"\"").toString().trim();
            } else {
                return "NOT SUPPORTED";
            }
        } catch {
            return "UNKNOWN";
        }
    },

    getTotalGroups: function () {
        try {
            if (process.platform === "linux") {
                return execSync("cat /etc/group | wc -l").toString().trim();
            } else if (process.platform === "win32") {
                return execSync("net localgroup | find /c /v \"\"").toString().trim();
            } else {
                return "NOT SUPPORTED";
            }
        } catch {
            return "UNKNOWN";
        }
    },

    onStart: async function ({ api, event }) {
        try {
            const timeStart = Date.now();
            const { cpu, cpuTemperature, currentLoad, memLayout, diskLayout, mem, osInfo, graphics } = si;

            const { manufacturer, brand, speed, physicalCores, cores } = await cpu();
            const { main: mainTemp } = await cpuTemperature();
            const { currentLoad: load } = await currentLoad();
            const diskInfo = await diskLayout();
            const memInfo = await memLayout();
            const { total: totalMem, available: availableMem } = await mem();
            const { platform: OSPlatform, build: OSBuild, arch } = await osInfo();
            const { controllers } = await graphics();

            const time = process.uptime();
            const hours = String(Math.floor(time / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
            const seconds = String(Math.floor(time % 60)).padStart(2, '0');

            const gpuDetails = controllers.length > 0 ? controllers.map(gpu => (
                `MODEL: ${gpu.model}\nVRAM: ${this.byte2mb(gpu.vram)}\nDRIVER VERSION: ${gpu.driverVersion}`
            )).join('\n\n') : "NO GPU DETECTED";

            const installedPackages = this.getInstalledPackages();
            const totalUsers = this.getTotalUsers();
            const totalGroups = this.getTotalGroups();

            const systemInfo = `SYSTEM INFO:

CPU INFO:
MANUFACTURER: ${manufacturer} ${brand}
SPEED: ${speed} GHz
PHYSICAL CORES: ${physicalCores}
THREADS: ${cores}
TEMPERATURE: ${mainTemp}°C
LOAD: ${load.toFixed(1)}%

MEMORY INFO:
TYPE: ${memInfo[0].type}
TOTAL: ${this.byte2mb(totalMem)}
AVAILABLE: ${this.byte2mb(availableMem)}

DISK INFO:
NAME: ${diskInfo[0].name}
SIZE: ${this.byte2mb(diskInfo[0].size)}
TYPE: ${diskInfo[0].type}

GPU INFO:
${gpuDetails}

ADDITIONAL INFO:
INSTALLED PACKAGES: ${installedPackages}
TOTAL USERS: ${totalUsers}
TOTAL GROUPS: ${totalGroups}

OS INFO:
PLATFORM: ${OSPlatform} (${arch})
BUILD: ${OSBuild}
UPTIME: ${hours}:${minutes}:${seconds}
PING: ${(Date.now() - timeStart)}ms`;

            const images = [
                "https://i.imgur.com/dMmTo9C.jpeg",
                "https://i.imgur.com/j1EFkoO.jpeg",
                "https://i.imgur.com/2W1Olpo.jpeg",
                "https://i.imgur.com/GOtplM8.jpeg",
                "https://i.imgur.com/rSps1FI.jpeg",
                "https://i.imgur.com/bH93IxF.jpeg",
                "https://i.imgur.com/FohUXKK.jpeg",
                "https://i.imgur.com/WB2q6a6.jpeg",
                "https://i.imgur.com/Y9d17R3.jpeg",
                "https://i.imgur.com/RFECwDo.jpeg",
                "https://i.imgur.com/NPasXzw.jpeg",
                "https://i.imgur.com/NPasXzw.jpeg",
                "https://i.imgur.com/ossbykT.jpeg",
                "https://i.imgur.com/cGzlaHU.jpeg",
                "https://i.imgur.com/OkslSRP.png",
                "https://i.imgur.com/IG00E9x.png",
                "https://i.imgur.com/BbQ59jR.jpeg",
                "https://i.imgur.com/r0AJLsQ.jpeg",
            ];
