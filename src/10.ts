const generateRandomTsCode = () => {
  const code = `
    export interface MyInterface {
      prop1: string;
      prop2: number;
      method1(arg1: string, arg2: number): void;
    }

    class MyClass implements MyInterface {
      prop1 = 'hello';
      prop2 = 0;

      method1(arg1: string, arg2: number) {
        console.log(arg1 + arg2);
      }
    }
  `;

  return code;
};
