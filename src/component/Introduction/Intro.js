import React from 'react'
import RulesOne from './AllRules/RulesOne'
import RulesTwo from './AllRules/RulesTwo'
import RulesThree from './AllRules/RulesThree'
import RulesFour from './AllRules/RulesFour'
import RulesFive from './AllRules/RulesFive'
import RulesSix from './AllRules/RulesSix'
import RulesSeven from './AllRules/RulesSeven'
import RulesEight from './AllRules/RulesEight'
import RulesNine from './AllRules/RulesNine'
import RulesTen from './AllRules/RulesTen'
import RulesEleven from './AllRules/RulesEleven'
import RulesTwelve from './AllRules/RulesTwelve'
import RulesThirteen from './AllRules/RulesThirteen'
import RulesFourteen from './AllRules/RulesFourteen'
import RulesFifteen from './AllRules/RulesFifteen'
import RulesSixteen from './AllRules/RulesSixteen'
import RulesSeventeen from './AllRules/RulesSeventeen'
import RulesEighteen from './AllRules/RulesEighteen'
import RulesNineteen from './AllRules/RulesNineteen'
import RulesTwenty from './AllRules/RulesTwenty'
import Rules_21 from './AllRules/Rules_21'
import Rules_22 from './AllRules/Rules_22'
import Rules_23 from './AllRules/Rules_23'
import Details from '../About/Details'

const Intro = () => {
  window.scrollTo(0,0);
  return (
    <div className='2xl:px-[18rem] 3xl:px-[20%] px-4  text-justify my-5 '>
      <div className=' 2xsm:text-[40px]   text-[#ffffff]  flex flex-col items-center mb-12   '>
                ABOUT US
            <hr className='border-b-2 w-28 rounded-sm border-orange-400'></hr>
            </div>
      <div>
        <Details/>
      </div>
        <RulesOne/>
        <RulesTwo/>
        <RulesThree/>
        <RulesFour/>
        <RulesFive/>
        <RulesSix/>
        <RulesSeven/>
        <RulesEight/>
        <RulesNine/>
        <RulesTen/>
        <RulesEleven/>
        <RulesTwelve/>
        <RulesThirteen/>
        <RulesFourteen/>
        <RulesFifteen/>
        <RulesSixteen/>
        <RulesSeventeen/>
        <RulesEighteen/>
        <RulesNineteen/>
        <RulesTwenty/>
        <Rules_21/>
        <Rules_22/>
        <Rules_23/>
    </div>
  )
}

export default Intro