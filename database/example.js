// Store Item
const Item = sequelize.define('Item', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  normalPrice: Sequelize.FLOAT,
  openDate: Sequelize.TIMESTAMP,
  expireDate: Sequelize.TIMESTAMP,
  codeStockID: Sequelize.INTEGER,
  code: Sequelize.INTEGER
},{
  classMethods: {
    associate: function(models) {
      Item.hasMany(PromotionSale, { foreignKey: 'item_id' }),
	  Item.hasOne(CodeStock, { foreignKey: 'item_id' })
    }
  }
})

// Store package sale
const PromotionSale = sequelize.define('PromotionSale', {
  id: Sequelize.INTEGER,
  item_id: Sequelize.INTEGER,
  satartDate: Sequelize.TIMESTAMP,
  toDate: Sequelize.TIMESTAMP,
  salePrice: Sequelize.FLOAT
},{
  classMethods: {
    associate: function(models) {
      PromotionSale.belongsTo(Item, { foreignKey: 'user_id' })
    }
  }
})

// Store code stock source
const CodeStock = sequelize.define('CodeStock', {
  id: Sequelize.INTEGER,
  item_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
},{
  classMethods: {
    associate: function(models) {
      CodeStock.belongsTo(Item, { foreignKey: 'item_id' })
    }
  }
})