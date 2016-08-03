var app = angular.module('app', []);
app.controller('controller', function(){
  var list = this;
  list.headTitle =
  [ 'Drawing Number',
  'Fascia Gauge',
  'Vacuum System',
  'Shows Auto Door Option',
  'Door 2 Shown',
  'Single or Dual Steam Supply',
  'Chamber Piping Material',
  'Jacket Piping Material',
  'Valve Actuation',
  'Extended Options',
  'Latest Door Part Number',
  'Notes'
];

//ENTER DRAWINGS HERE

list.drawings =[
  {
    "DrawingNo": "82-37886",
    "FasciaGauge": 2,
    "VacuumSystem": "1PH Enviro-Vac (86-35315/86-35315)",
    "ShowsAuto_Door_Option": "No",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "S/S",
    "JacketPipingMaterial": "S/S",
    "ValveActuation": "Pneumatic",
    "ExtendedOptions": "Load Probe (TE-5)",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-36998",
    "FasciaGauge": 2,
    "VacuumSystem": "Water Ejector (82-34947)",
    "ShowsAuto_Door_Option": "Yes",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Dual",
    "ChamberPipingMaterial": "S/S",
    "JacketPipingMaterial": "S/S",
    "ValveActuation": "Pneumatic",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-36862",
    "FasciaGauge": 2,
    "VacuumSystem": "3PH Enviro-Vac (86-36485)",
    "ShowsAuto_Door_Option": "Yes",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Electric",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-36858",
    "FasciaGauge": 2,
    "VacuumSystem": "Water Ejector (82-34947)",
    "ShowsAuto_Door_Option": "Yes",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "S/S",
    "JacketPipingMaterial": "S/S",
    "ValveActuation": "Pneumatic",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-36780",
    "FasciaGauge": 2,
    "VacuumSystem": "Water Ejector (82-34947)",
    "ShowsAuto_Door_Option": "Yes",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Electric",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-36545",
    "FasciaGauge": 2,
    "VacuumSystem": "Water Ejector (82-34947)",
    "ShowsAuto_Door_Option": "No",
    "Door2Shown": "Yes",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Electric",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "We show door 2 components  (seal/unseal) that are not supplied with any existing sub-assembly"
  },
  {
    "DrawingNo": "82-36426",
    "FasciaGauge": 2,
    "VacuumSystem": "3PH Enviro-Vac (86-36485)",
    "ShowsAuto_Door_Option": "No",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Pneumatic",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-36336",
    "FasciaGauge": 2,
    "VacuumSystem": "1PH Enviro-Vac (86-35315/86-35315)",
    "ShowsAuto_Door_Option": "No",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Electric",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-36189",
    "FasciaGauge": 2,
    "VacuumSystem": "3PH Enviro-Vac (86-36485)",
    "ShowsAuto_Door_Option": "Yes",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "S/S",
    "JacketPipingMaterial": "S/S",
    "ValveActuation": "Pneumatic",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "None"
  },
  {
    "DrawingNo": "82-35968",
    "FasciaGauge": 2,
    "VacuumSystem": "Water Ejector (82-21831)",
    "ShowsAuto_Door_Option": "No",
    "Door2Shown": "No",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Pneumatic",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Yes",
    "Notes": "Assembly must install non-standard manual valve between chamber drain and e-vac.  Penn-State wanted this feature."
  },
  {
    "DrawingNo": "82-35629",
    "FasciaGauge": "2-1/2",
    "VacuumSystem": "1PH Enviro-Vac (86-35315/86-35315)",
    "ShowsAuto_Door_Option": "No",
    "Door2Shown": "Yes",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Electric",
    "ExtendedOptions": "Isothermal (Jkt Drain Dump / PV-9",
    "LatestDoorPN": "No",
    "Notes": "Obsolete for use on new capital jobs due to large fascia gauges.  Shows seal/unseal on door assembly, latest machines have that assembly included with the piping.  Also shows never used second door.  We show door 2 components (seal/unseal) that are not supplied with any existing sub-assembly."
  },
  {
    "DrawingNo": "82-35328",
    "FasciaGauge": "2-1/2",
    "VacuumSystem": "1PH Enviro-Vac (86-35315/86-35315)",
    "ShowsAuto_Door_Option": "Yes",
    "Door2Shown": "Yes",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Electric",
    "ExtendedOptions": "None",
    "LatestDoorPN": "Old and new door called out but wrong graphics now that unseal is with piping",
    "Notes": "Obsolete for use on new capital jobs due to large fascia gauges.  Shows seal/unseal on door assembly, latest machines have that assembly included with the piping.  Also shows never used second door.  We show door 2 components (seal/unseal) that are not supplied with any existing sub-assembly."
  },
  {
    "DrawingNo": "82-34946",
    "FasciaGauge": "2-1/2",
    "VacuumSystem": "Water Ejector (82-34947)",
    "ShowsAuto_Door_Option": "No",
    "Door2Shown": "Yes",
    "SingleOrDual_Steam_Supply": "Single",
    "ChamberPipingMaterial": "Cu/Br",
    "JacketPipingMaterial": "Cu/Br",
    "ValveActuation": "Electric",
    "ExtendedOptions": "None",
    "LatestDoorPN": "No",
    "Notes": "Obsolete for use on new capital jobs due to large fascia gauges.  Shows seal/unseal on door assembly, latest machines have that assembly included with the piping.  Also shows never used second door.  We show door 2 components (seal/unseal) that are not supplied with any existing sub-assembly."
  }
];


});
