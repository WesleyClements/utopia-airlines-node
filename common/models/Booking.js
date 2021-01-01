const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Booking extends Model { 
  toJSON(){
    const values = Object.assign({}, this.get());
    return values;
  }
}

Booking.init ({
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: "booking",
  underscored: true,
  timestamps: false,
  freezeTableName: true,
  sequelize,
});


module.exports = { Booking };