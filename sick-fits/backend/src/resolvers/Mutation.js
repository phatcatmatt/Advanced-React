const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in  
    
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);
    console.log("​createItem -> item", item)

    return item;
  }
};

module.exports = Mutations;
