export interface Root {
    data: Daum[]
  }
  
  export interface Daum {
    id: number
    name: string
    type: string
    frameType: string
    desc: string
    race: string
    archetype?: string
    card_sets?: CardSet[]
    card_images: CardImage[]
    card_prices: CardPrice[]
    atk?: number
    def?: number
    level?: number
    attribute?: string
    pend_desc?: string
    monster_desc?: string
    scale?: number
    linkval?: number
    linkmarkers?: string[]
    banlist_info?: BanlistInfo
  }
  
  export interface CardSet {
    set_name: string
    set_code: string
    set_rarity: string
    set_rarity_code: string
    set_price: string
  }
  
  export interface CardImage {
    id: number
    image_url: string
    image_url_small: string
    image_url_cropped: string
  }
  
  export interface CardPrice {
    cardmarket_price: string
    tcgplayer_price: string
    ebay_price: string
    amazon_price: string
    coolstuffinc_price: string
  }
  
  export interface BanlistInfo {
    ban_tcg?: string
    ban_ocg?: string
    ban_goat?: string
  }
  