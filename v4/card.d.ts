declare module MTGJSON {
  export interface ForeignDataEntry {
    /**
     * Flavor text in foreign language.
     */
    flavorText?: string

    /**
     * Foreign language of card.
     */
    language: ForeignLanguage

    /**
     * Multiverse ID of the card.
     */
    multiverseId: MultiverseID

    /**
     * Name of the card in foreign language.
     */
    name: string

    /**
     * Rules text of the card in foreign language.
     */
    text: string

    /**
     * Type in foreign language.
     */
    type: string
  }


  /**
   * Representation of an MTG Card
   * @see https://mtgjson.com/v4/docs.html
   */
  export interface Card {
    /**
     * Name of artist
     */
    artist: string

    /**
     * Color of the card border
     */
    borderColor: BorderColor

    /**
     * List of all colors in card's mana cost, rules text,
     * and any color indicator
     */
    colorIdentity: ColorCode[]

    /**
     * List of all colors in color indicator.
     *
     * Only found in cards without mana costs or other special cards.
     */
    colorIndicator?: ColorCode[]

    /**
     * List of colors in card's mana cost and any color indicator.
     * Some cards are special (such as Devoid card or other cards with unique rules text)
     */
    colors: ColorCode[]

    /**
     * Converted mana cost.
     *
     * Is a float due to unhinged stuff costing 1.5 mana
     */
    convertedManaCost: number

    /**
     * Italicized text found below the rules text that has no game function
     */
    flavorText?: string

    /**
     * Can the card be only found in foil?
     * @default false
     */
    isFoilOnly?: boolean

    /**
     * List of data about cards written in foreign languages.
     *
     * In mtg the "true rules" are all in English
     */
    foreignData: ForeignDataEntry[]

    /**
     * Style of the card frame
     */
    frameVersion: FrameVersion

    /**
     * Can the card be found in foil? Typically omitted if false
     *
     * @default true
     */
    hasFoil?: boolean

    /**
     * Can the card be found in non-foil? Typically omitted if false
     *
     * @default true
     */
    hasNonFoil?: boolean

    /**
     * Is the card only avilable online? Typically omitted if false
     * @default false
     */
    isOnlineOnly?: boolean

    /**
     * Is the card oversized? Typically omitted if false
     * @default false
     */
    isOversized: boolean

    /**
     * Is the card on the Reserved List? Typically omitted if false
     * @default false
     */
    isReserved: boolean

    /**
     * Type of card. Typically omitted if "normal"
     * @default "normal"
     */
    layout: Layout

    /**
     * Map of play formats to the ability to play them in that format.
     *
     * If a format is missing, it is assume the card is not legal in that format.
     * @default "Legal"
     */
    legalities: Map<Format, Legality>

    /**
     * Planeswalker loyalty value.
     *
     * @example "7", or "X"
     */
    loyalty?: string

    /**
     * Mana cost in "symbol" notation
     *
     * @example "{1}{U}{B}{R}"
     */
    manaCost?: string

    /**
     * An integer most cards have which Wizards uses as a card identifier.
     */
    multiverseId: MultiverseID

    /**
     * Name of the card
     */
    name: string

    /**
     * Names of each face on the card.
     *
     * For flip cards, the first card is the front face.
     * For meld cards, the first card is the left side, the seond card the right side, and the third card is the melded side.
     */
    names: string[]

    /**
     * The collector's number of the card. Can be 345a or larger than the number of cards in the set.
     */
    number: string

    /**
     * Text on the card as originally printed, rather than it's oracle text.
     *
     * Can be \r\n seperated rather than \n seperated
     */
    originalText: string

    /**
     * Type as originally printed. Includes any supertypes and subtypes.
     */
    originalType: string

    /**
     * List of sets the card was printed in in uppercase. promo sets are prefexed with P
     *
     * @example ["M19", "PM19"]
     */
    printings: UppercaseSetCode[]

    /**
     * Power of a creature
     * @example "4" or "X"
     */
    power: string

    /**
     * Rarity of the card
     */
    rarity: Rarity

    /**
     * The rulings on this card if any
     */
    rulings: Ruling[]

    /**
     * List of card subtypes found after em-dash
     * @example ["Elder", "Dragon"]
     */
    subtypes: string[]

    /**
     * List of card supertypes found before the em-dash
     */
    supertypes: string[]

    /**
     * Rules text of the card. Also known as the "Oracle Text" and is the official rules text
     *
     * Can be \r\n seperated rather than \n seperated
     */
    text: string

    /**
     * Toughness of the card
     * @example "4" or "X"
     */
    toughness: string

    /**
     * Full typeline of the card
     *
     * @example "Legendary Creature — Elder Dragon"
     */
    type: string

    /**
     * List of types of the card
     *
     * @example ["Creature"]
     */
    types: string[]

    /**
     * A universal unique id generated for the card.
     *
     * @example "7b215968-93a6-4278-ac61-4e3e8c3c3943"
     */
    uuid: UUID

    /**
     * Name of the watermark on the card. Can be one of many different values, including:
     * a guild name, clan name, wotc for the shooting star.
     *
     * (If there isn’t one, it can be an empty string, but it is usually omitted.)
     */
    watermark?: string
  }
}
