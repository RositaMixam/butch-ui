export interface Configurations {
    id: string,
    shopId: string,
    machineName: string,
    availableEquipment: AvailableEquipment,
    pressSheets: [],
    componentSetupSheets: [],
    laminationCosts: []
}

interface AvailableEquipment {
    offsetPresses: OffsetPresses[],
    foldingMachines: [],
    bindingMachines: []
}

interface OffsetPresses {
  name: string;
  purchaseCost: number;
  usefulLifeMonths: number;
  monthlyRuntimeHours: number;
  runtimeRatio: number;
  equipmentMaintenanceRatio: number;
  serverMaintenanceRatio: number;
  makeReadyTimeMinutes: number;
  labourCosts: [
    {
      role: 'Offset Press large';
      hourlyRate: number;
      benefitsRatio: number;
      cost: number;
    },
    {
      role: 'Offset Press Small';
      hourlyRate: number;
      benefitsRatio: number;
      cost: number;
    }
  ];
  colours: number;
  platesCostPerColour: number;
  inkCostPerSheet: number;
  sheetsPerHour: number;
  totalCostPerThousandPressSheets: number;
  labourCostPerThousandPressSheets: number;
  totalHourlyCost: number;
  hourlyLabourCost: number;
  monthlyEquipmentCost: number;
  hourlyEquipmentCost: number;
  makeReadyCost: number;
  hourlyEquipmentMaintenanceCost: number;
  hourlyServerMaintenanceCost: number;
  monthlyEquipmentMaintenanceCost: number;
  monthlyServerMaintenanceCost: number;
}