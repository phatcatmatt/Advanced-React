const Mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    // create dog
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    return newDog;
    console.log('args', args);
  }
};

module.exports = Mutations;
