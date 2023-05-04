const sample = () => {
    const obj1 = {a:1};
    const obj2 = {b:2};

    //spread synyax ..., deep copy
    const obj3 = {...obj1, x:4, obj2};
    obj1.a = 1000;
    obj2.b = 500;
    console.log(obj3);

}


sample();