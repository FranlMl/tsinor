const numTarget = (nums, target) => {
  let stock = [];

  for (i = 0; i < nums.length; i++) {
    const good = target - nums[i];

    if (good in stock) {
      return [stock[good], i];
    }

    stock[nums[i]] = i;
  }
  
};

console.log(numTarget([3, 4, 6, 2, 12], 9));
