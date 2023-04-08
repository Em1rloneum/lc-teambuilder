import { useState, useContext } from 'react';
import { TeamContext, TeamDispatchContext, EgoDispatchFunctions } from '@/hooks/teamContext';
import { getSinCSSColor, getEgoRarityAsset } from '@/helpers/assets';
import { getSinnerEgoSrcImg } from '@/helpers/sinnerData'
import { SinnerNumber, EgoData, EgoRarity, EGO_RARITIES } from '@/types/data';
import styles from './ego-component.module.scss';

interface EgoComponentProps {
  sinner: SinnerNumber;
  egoData : EgoData[];
}

export default function EgoComponent({sinner, egoData} : EgoComponentProps) {
  const team = useContext(TeamContext);
  const memberEgos = team.find((member) => member.sinner === sinner)?.egos;

  const dispatch = useContext(TeamDispatchContext);
  const [egoSelected] = EgoDispatchFunctions(dispatch);


  function getEgo(rarity: EgoRarity) {
    return egoData.find((ego) => ego.rarity === rarity);
    // return memberEgos?.find((ego) => ego.rarity === rarity);
  }

  function egoRow(egoRarity: EgoRarity) {
    const ego = getEgo(egoRarity);

    return (
      <div key={egoRarity} className={styles["ego-row"]} onClick={() => ego ? egoSelected(ego) : {} }>
        <div className={styles["char-block"]}>
          <img src={getEgoRarityAsset(egoRarity)}
               alt={egoRarity}/>
        </div>
        <div className={styles["ego-name"]}
             style={ ego ? {color: getSinCSSColor(ego.affinity)} : {} }>
          { ego?.name }
        </div>
          { ego ? <img src={getSinnerEgoSrcImg(ego)} className={styles["ego-img"]}/> : null }
      </div>
    )
  }

  return (
    <div className={styles.container}>
      { EGO_RARITIES.map((item) => egoRow(item)) }
    </div>
  )
}
