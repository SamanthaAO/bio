import { AnimateTo, AnimateGroup } from "@microsoft/fast-animation";
// import { AnimateSequence} from "@microsoft/fast-animation";

export default function  animate() {
    const dinoAnimate = document.querySelector("#dino");
    const treeAnimate1 = document.querySelector("#tree1");
    const treeAnimate2 = document.querySelector("#tree2");
    const treeAnimate3 = document.querySelector("#tree3");


    const x = 80;
    // const angle = 22.5;
    
    

    const mySequence = new AnimateGroup([
      
      new AnimateTo(dinoAnimate, { x: 2000}, { duration: x*20 }),
      new AnimateTo(treeAnimate1, { rotate: 90}, { delay:x }),
      new AnimateTo(treeAnimate2, { rotate: 90}, { delay:x*5 }),
      new AnimateTo(treeAnimate3, { rotate: 90}, { delay:x*6 }),
    ]);

    mySequence.onFinish = () => {
      console.log("Did you like my animations?");
    }

    
    mySequence.play(); 

  };