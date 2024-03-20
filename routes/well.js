const express = require('express');
const route = express.Router();

// dummy aja buat testing
route.get('/', (req, res, next) => {
    res.status(200).json({
        "message": "success",
        "result": 
            [
            {
                "id": "1",
                "wellName": "Well A",
                "officeName": "PT PDU",
                "Date-Time": "2023-06-02 00:00:00.0",
                "BitDepth(m)": "86",
                "Scfm": "0",
                "MudCondIn(mmho)": "",
                "BlockPos(m)": "3",
                "WOB(klb)": "0",
                "ROPi(m/hr)": "0",
                "BVDepth(m)": "86",
                "MudCondOut(mmho)": "",
                "Torque(klb.ft)": "0",
                "RPM": "0",
                "Hkld(klb)": "60",
                "LogDepth(m)": "1562",
                "H2S_1(m)": "0",
                "MudFlowOutp": "76",
                "TotSPM": "145",
                "SpPress(psi)": "2044",
                "MudFlowIn(gpm)": "690",
                "CO2_1(%)": "0",
                "Gas(%)": "",
                "MudTempIn(°C)": "25",
                "MudTempOut(°C)": "28",
                "TankVolTot(bbl)": "1293"
            },
            {
                "id": "2",
                "wellName": "Well A",
                "officeName": "PT PDU",
                "Date-Time": "2023-06-02 00:00:10.0",
                "BitDepth(m)": "86",
                "Scfm": "0",
                "MudCondIn(mmho)": "",
                "BlockPos(m)": "3",
                "WOB(klb)": "0",
                "ROPi(m/hr)": "0",
                "BVDepth(m)": "86",
                "MudCondOut(mmho)": "",
                "Torque(klb.ft)": "0",
                "RPM": "0",
                "Hkld(klb)": "60",
                "LogDepth(m)": "1562",
                "H2S_1(m)": "0",
                "MudFlowOutp": "75",
                "TotSPM": "151",
                "SpPress(psi)": "2244",
                "MudFlowIn(gpm)": "718",
                "CO2_1(%)": "0",
                "Gas(%)": "",
                "MudTempIn(°C)": "25",
                "MudTempOut(°C)": "28",
                "TankVolTot(bbl)": "1269"
            }            
            ]              
    });
});

route.post('/', (req, res, next) => {
    res.status(201).json({
        message: "success",
        result: {
            "id": "2",
            "wellName": "Well A",
            "officeName": "PT PDU",
            "Date-Time": "2023-06-02 00:00:10.0",
            "BitDepth(m)": "86",
            "Scfm": "0",
            "MudCondIn(mmho)": "",
            "BlockPos(m)": "3",
            "WOB(klb)": "0",
            "ROPi(m/hr)": "0",
            "BVDepth(m)": "86",
            "MudCondOut(mmho)": "",
            "Torque(klb.ft)": "0",
            "RPM": "0",
            "Hkld(klb)": "60",
            "LogDepth(m)": "1562",
            "H2S_1(m)": "0",
            "MudFlowOutp": "75",
            "TotSPM": "151",
            "SpPress(psi)": "2244",
            "MudFlowIn(gpm)": "718",
            "CO2_1(%)": "0",
            "Gas(%)": "",
            "MudTempIn(°C)": "25",
            "MudTempOut(°C)": "28",
            "TankVolTot(bbl)": "1269"
        }
    });
});

module.exports = route;
