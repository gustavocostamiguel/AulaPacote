import "./Pacote.css"

export type PacoteType = {
    id: string;
    largura: number;
    profundidade: number;
    altura: number;
    peso: number;
}

export type PacoteProps={
    pacote: PacoteType;
    onExcluir:() => void;
}

export default function Pacote() {
    return <div className="pacote">
        <dt>{pacote.id}</dt>
        <dd>{pacote.largura}</dd>
        <dt>{pacote.profundidade}</dt>
        <dd>{pacote.altura}</dd>
        <dt>{pacote.peso}</dt>

    </div>
}