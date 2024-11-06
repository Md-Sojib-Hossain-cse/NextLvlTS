"use strict";
{
    //statics
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    console.log(Counter.increment());
    // const instance1 = new Counter();
    // console.log(instance1.increment());  //1  ---> in different Memory   -  //1  ---> in static Memory
    // console.log(instance1.increment());  //2  ---> in different Memory   -  //2  ---> in static Memory
    // console.log(instance1.increment());  //3  ---> in different Memory   -  //3  ---> in static Memory
    // const instance2 = new Counter();
    // console.log(instance2.increment());  //1  ---> in different Memory   -  //4  ---> in static Memory
    // console.log(instance2.increment());  //2  ---> in different Memory   -  //5  ---> in static Memory
    // console.log(instance2.increment());  //3  ---> in different Memory   -  //6  ---> in static Memory
}
