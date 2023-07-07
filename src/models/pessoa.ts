
import mongoose, { Document, Model, Schema } from "mongoose";
 
    export interface IPessoa extends Document {
    nome: string;
    dataNascimento: Date;
    dataMorte?: Date;
    localNascimento?: string;
    paisOrigem?: string;
    filhos: string[];
    paiId?: string;
    maeId?: string;
    filhosId?: string[];
    conjugesId?: string[];
    geracao?: number;
    pdfs?: {
        nome: string;
        arquivo: string;
    }[];
    adicionarFilho(filho: IPessoa): Promise<void>;
    adicionarPais(pai: IPessoa, mae: IPessoa): Promise<void>;
    adicionarFilho(filhoId: string): Promise<void>;
    removerFilho(filhoId: string): Promise<void>;
    setPai(paiId: string): Promise<void>;
    setMae(maeId: string): Promise<void>;
    adicionarConjuge(conjugeId: string): Promise<void>;
    removerConjuge(conjugeId: string): Promise<void>;
    }

    const PessoaSchema: Schema = new mongoose.Schema({
    nome: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    dataMorte: { type: Date },
    localNascimento: { type: String },
    paisOrigem: { type: String },
    filhosId: [{ type: Schema.Types.ObjectId, ref: "Pessoa" }],
    pai_id: { type: Schema.Types.ObjectId, ref: "Pessoa" },
    mae_id: { type: Schema.Types.ObjectId, ref: "Pessoa" },
    conjugesId: [{ type: Schema.Types.ObjectId, ref: "Pessoa" }],
    geracao: { type: Number, required: true },
    pdfs: [
        {
        nome: { type: String },
        arquivo: { type: String },
        },
    ],
    });

    PessoaSchema.methods.adicionarFilho = async function (
    filhoId: string
    ): Promise<void> {
    if (!this.filhosId.includes(filhoId)) {
        this.filhosId.push(filhoId);
        await this.save();
    } 
    };

    PessoaSchema.methods.removerFilho = async function (
    filhoId: string
    ): Promise<void> {
    const index = this.filhosId.indexOf(filhoId);
    if (index !== -1) {
        this.filhosId.splice(index, 1);
        await this.save();
    }
    };

    PessoaSchema.methods.setPai = async function (paiId: string): Promise<void> {
    this.pai_id = paiId;
    await this.save();
    };

    PessoaSchema.methods.setMae = async function (maeId: string): Promise<void> {
    this.mae_id = maeId;
    await this.save();
    };

    PessoaSchema.methods.adicionarConjuge = async function (
    conjugeId: string
    ): Promise<void> {
    if (!this.conjugesId.includes(conjugeId)) {
        this.conjugesId.push(conjugeId);
        await this.save();
    }
    };

    PessoaSchema.methods.removerConjuge = async function (
    conjugeId: string
    ): Promise<void> {
    const index = this.conjugesId.indexOf(conjugeId);
    if (index !== -1) {
        this.conjugesId.splice(index, 1);
        await this.save();
    }
    };

    const Pessoa: Model<IPessoa> =
    mongoose.models.Pessoa || mongoose.model<IPessoa>("Pessoa", PessoaSchema);

    export default Pessoa;
