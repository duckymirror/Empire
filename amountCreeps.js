var amountCreeps = {
    run(amountCreeps) {

        Memory.amountCreeps.amountMiners0InW49S29 = 1;
        Memory.amountCreeps.amountMiners1InW49S29 = 1;
        Memory.amountCreeps.amountTransportersInW49S29 = 3;
        Memory.amountCreeps.amountBuildersInW49S29 = 4;

        if (Game.flags.attack) {
            Memory.amountCreeps.amountWarriorsInW49S29 = 1;
        } else {
            Memory.amountCreeps.amountWarriorsInW49S29 = 0;
        }

        Memory.amountCreeps.amountClaimersInW49S29 = 0;
        Memory.amountCreeps.amountFarBuildersInW49S29 = 0;

        //---------------------------------------------------------------------------------------

        Memory.amountCreeps.amountMiners0InE49S39 = 1;
        Memory.amountCreeps.amountMiners1InE49S39 = 1;
        Memory.amountCreeps.amountTransportersInE49S39 = 3;
        Memory.amountCreeps.amountBuildersInE49S39 = 1;

        if (Game.flags.attack) {
            Memory.amountCreeps.amountWarriorsInE49S39 = 1;
        } else {
            Memory.amountCreeps.amountWarriorsInE49S39 = 0;
        }

        Memory.amountCreeps.amountClaimersInE49S39 = 0;
        Memory.amountCreeps.amountFarBuildersInE49S39 = 0;

        //---------------------------------------------------------------------------------------

        Memory.amountCreeps.amountMiners0InE16S28 = 0;
        Memory.amountCreeps.amountMiners1InE16S28 = 1;
        Memory.amountCreeps.amountTransportersInE16S28 = 2;
        Memory.amountCreeps.amountBuildersInE16S28 = 4;

        if (Game.flags.attack) {
            Memory.amountCreeps.amountWarriorsInE16S28 = 1;
        } else {
            Memory.amountCreeps.amountWarriorsInE16S28 = 0;
        }

        Memory.amountCreeps.amountClaimersInE16S28 = 0;
        Memory.amountCreeps.amountFarBuildersInE16S28 = 0;

        //---------------------------------------------------------------------------------------

        Memory.amountCreeps.amountMiners0InW13N47 = 1;
        Memory.amountCreeps.amountMiners1InW13N47 = 1;
        Memory.amountCreeps.amountTransportersInW13N47 = 2;
        Memory.amountCreeps.amountBuildersInW13N47 = 1;

        if (Game.flags.attack) {
            Memory.amountCreeps.amountWarriorsInW13N47 = 1;
        } else {
            Memory.amountCreeps.amountWarriorsInW13N47 = 0;
        }

        Memory.amountCreeps.amountClaimersInW13N47 = 0;
        Memory.amountCreeps.amountFarBuildersInW13N47 = 0;
    }
};
module.exports = amountCreeps;
