import {TOTAL_SCREENS} from './commonUtils'
import {Subject} from 'rxjs'




export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject()
  static currentScreenFadeIn = new Subject()

  constructor(){
    window.addEventListener('scroll', this.checkCurrentScreenUnerViewport)
  }
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe")
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({behavior: "smooth"})
  }

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home")
    if (!homeScreen) return;
    homeScreen.scrollIntoView({behavior: "smooth"})
  }
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisable = elementTop < window.innerHeight && elementBottom >=0;
    let completelyVisable = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch(type){
      case "partial":
        return partiallyVisable;

      case "complete":
        return completelyVisable
        default:
          return false
    }


  }

  checkCurrentScreenUnerViewport =(event) =>{
    if (!event || Object.keys(event).length < 1)
    return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDom = document.getElementById(screen.screen_name);
      if(!screenFromDom)
      continue;

      let fullyVisable = this.isElementInView(screenFromDom, "complete");
      let partiallyVisable = this.isElementInView(screenFromDom, "partial")

      if(fullyVisable || partiallyVisable) {
        if(partiallyVisable && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next ({
            fadeInScreen: screen.screen_name

          });
          screen['alreadyRendered'] = true;
          break;

        }
        if(fullyVisable){
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name
          });
          break
        }
      }

    }
  };
}