import { Document, Model } from "mongoose";
import Pessoa, { IPessoa } from "../models/pessoa";

class PessoasDAO {
  private readonly model: Model<IPessoa & Document>;

  constructor() {
    this.model = Pessoa;
  }

  async create(pessoa: IPessoa): Promise<IPessoa> {
    const createdPessoa = await this.model.create(pessoa);
    return createdPessoa.toObject();
  }

  async findById(id: string): Promise<IPessoa | null> {
    const pessoa = await this.model.findById(id).lean();
    return pessoa as IPessoa | null;
  }

  async update(id: string, pessoa: IPessoa): Promise<IPessoa | null> {
    const updatedPessoa = await this.model
      .findByIdAndUpdate(id, { $set: pessoa }, { new: true })
      .lean();
    return updatedPessoa as IPessoa | null;
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }

  async findAll(): Promise<IPessoa[]> {
    const pessoas = await this.model.find().sort({ nome: 1 }).lean();
    return pessoas as IPessoa[];
  }

  async addConjuge(pessoaId: string, conjugeId: string): Promise<void> {
    const pessoa = await this.findById(pessoaId);
    const conjuge = await this.findById(conjugeId);

    if (!pessoa || !conjuge) {
      throw new Error("Pessoa ou cônjuge não encontrado");
    }

    pessoa.conjugesId = pessoa.conjugesId || [];
    conjuge.conjugesId = conjuge.conjugesId || [];

    pessoa.conjugesId.push(conjugeId);
    conjuge.conjugesId.push(pessoaId);

    await Promise.all([
      this.update(pessoaId, pessoa),
      this.update(conjugeId, conjuge),
    ]);
  }
  async addFilho(paiId: string, maeId: string, filhoId: string): Promise<void> {
    const pai = await this.findById(paiId);
    const mae = await this.findById(maeId);
    const filho = await this.findById(filhoId);

    if (!pai) {
      throw new Error("Pai não encontrado");
    }
    if (!mae) {
      throw new Error("Mãe não encontrada");
    }
    if (!filho) {
      throw new Error("Filho não encontrado");
    }

    pai.filhosId = pai.filhosId || [];
    mae.filhosId = mae.filhosId || [];
    filho.paiId = paiId;
    filho.maeId = maeId;

    pai.filhosId.push(filhoId);
    mae.filhosId.push(filhoId);

    await Promise.all([
      this.update(paiId, pai),
      this.update(maeId, mae),
      this.update(filhoId, filho),
    ]);
  }
  async deleteFilho(paiId: string, maeId: string, filhoId: string): Promise<void> {
    const pai = await this.findById(paiId);
    const mae = await this.findById(maeId);
    const filho = await this.findById(filhoId);
  
    if (!pai) {
      throw new Error("Pai não encontrado");
    }
    if (!mae) {
      throw new Error("Mãe não encontrada");
    }
    if (!filho) {
      throw new Error("Filho não encontrado");
    }
  
    pai.filhosId = pai.filhosId || [];
    mae.filhosId = mae.filhosId || [];
  
    pai.filhosId = pai.filhosId.filter((id) => id !== filhoId);
    mae.filhosId = mae.filhosId.filter((id) => id !== filhoId);
  
    filho.paiId = undefined;
    filho.maeId = undefined;
  
    await Promise.all([
      this.update(paiId, pai),
      this.update(maeId, mae),
      this.update(filhoId, filho),
    ]);
  }
  
  async deleteConjuge(pessoaId: string, conjugeId: string): Promise<void> {
    const pessoa = await this.model.findById(pessoaId);
    const conjuge = await this.model.findById(conjugeId);

    if (!pessoa) {
      throw new Error("Pessoa não encontrada");
    }
    if (!conjuge) {
        throw new Error("Cônjuge não encontrado");
    }

    

    await pessoa.removerConjuge(conjugeId);
    await conjuge.removerConjuge(pessoaId);
  }
}

export default PessoasDAO;
