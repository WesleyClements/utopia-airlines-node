const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class UserBooking extends Model {
  static associate({ User, Passenger }) {
    UserBooking.belongsTo(User, {
      foreignKey: {
        name: "userId",
        field: "user_id",
        allowNull: false,
      },
      as: "user",
    });
    UserBooking.belongsTo(User, {
      foreignKey: {
        name: "agentId",
        field: "agent_id",
      },
      as: "agent",
    });
    UserBooking.hasMany(Passenger, {
      foreignKey: {
        name: "bookingId",
        field: "booking_id",
        allowNull: false,
      },
      as: "passengers",
    });
  }
  toJSON(){
    const values = Object.assign({}, this.get());
    delete values.confirmationCode;
    values.bookerId ?? delete values.bookerId;
    return values;
  }
}

UserBooking.init({
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  confirmationCode: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  tableName: "user_booking",
  freezeTableName: true,
  sequelize,
});

module.exports = { UserBooking };