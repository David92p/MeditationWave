import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = "ENG" | "ITA"

const EngHome = {
    header: "Meditation is not an escape but a peaceful encounter with reality.",
    par1: `How do you meditate? How can I learn to meditate quickly? These two are undoubtedly the questions I am asked most often by friends, relatives and students. It is not easy to answer this request in a few words and with ease. I myself have spent decades understanding and mastering meditation and its many techniques.`,
    par2: `Meditation can be defined as a set of techniques that aim to encourage a heightened state of awareness and focused attention. Meditation leads, in the long term, to a change in consciousness which has been shown to have many benefits on psychological well-being. Meditating above all means becoming, evolving, transforming, avoiding emotional stasis and the stagnation of our thoughts. And to do this we must focus all our attention on the present moment, without distractions.`,
    par3: `Meditation is just this: focusing on the here and now, without anxieties, worries and superfluous thoughts. Meditating means returning to the present moment again and again and disciplining the mind to detach itself from its "autopilot" to contemplate what surrounds us and feel all the sensations that pass through our body in the present.`
    
};

const  ItaHome = {
    header: "La meditazione non è un'evasione ma un incontro sereno con la realtà.",
    par1: `Come si medita? Come posso imparare a meditare in poco tempo? Queste due sono senza dubbio le domande che mi vengono poste più spesso da amici, parenti e allievi. Non è facile rispondere in poche parole e con facilità a questa richiesta, io stesso ho impiegato decenni a comprendere e padroneggiare la meditazione e le sue numerose tecniche.`,
    par2: `La meditazione può essere definita come un insieme di tecniche che hanno lo scopo di incoraggiare un elevato stato di consapevolezza e di attenzione focalizzata. La meditazione porta, nel lungo termine, a un cambiamento della coscienza che ha dimostrato di avere molti benefici sul benessere psicologico. Meditare significa soprattutto diventare, evolversi, trasformarsi, evitare la stasi emotiva e il ristagnare dei nostri pensieri. E per farlo dobbiamo focalizzare tutta la nostra attenzione sull’attimo presente, senza distrazioni.`,
    par3: `La meditazione è proprio questo: focalizzarci sul qui e ora, senza ansie, preoccupazioni e pensieri superflui. Meditare significa tornare ancora e ancora al momento presente e disciplinare la mente a staccarsi dal suo “autopilota” per contemplare ciò che ci circonda e avvertire tutte le sensazioni che attraversano il nostro corpo nel presente.`
}

interface initialState {
    language: Language
    darkMode: boolean
    home: typeof ItaHome | typeof EngHome
}

const initialState:initialState = {
    language: "ENG",
    darkMode: true,
    home: EngHome
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload
            switch (action.payload){
                case "ENG":
                    state.home = EngHome
                    break
                case "ITA":
                    state.home = ItaHome
                    break
            }
        },
        changeDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload
        }   
    },
});

export default globalSlice