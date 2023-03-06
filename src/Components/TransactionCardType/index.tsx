import React from 'react'
import { cardItems } from '../../data'
import Card from '../Card'
const TransactionCardType = () => {
  return (
<section className="mt-[3rem]">
          <h3 className="text-Ablack font-bold text-[1.5rem] mb-[1.5rem]">
            Transactions Per Card Type
          </h3>
          <div className="flex flex-wrap gap-[1.75rem]">
            {cardItems.map((cardItem, index) => (
              <Card
                key={`cardItems -${index}`}
                cardtype={cardItem.cardtype}
                img={cardItem.img}
                approvedpercent={cardItem.approvedpercent}
                approvedvalue={cardItem.approvedvalue}
                failedpercent={cardItem.failedpercent}
                failedvalue={cardItem.failedvalue}
              />
            ))}
          </div>
        </section>
  )
}

export default TransactionCardType
