const userModel = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const { name, page = 1, limit } = req.query;

    if (!limit) {
      return res.render('list', {
        students: [],
        hasNextPage: false,
        hasPrevPage: false,
        nextPage: 1,
        prevPage: 1,
        currentPage: 1,
        totalPages: 1,
        name,
        limit: '',
        errorMessage: 'O campo "limit" é obrigatório para buscar alunos.'
      });
    }

    const query = name
      ? { first_name: { $regex: name, $options: 'i' } } // case insensitive
      : {};

    const result = await userModel.paginate(query, {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { first_name: 1 },
      lean: true,
    });

    res.render('list', {
      students: result.docs,
      hasNextPage: result.hasNextPage,
      hasPrevPage: result.hasPrevPage,
      nextPage: result.nextPage || result.page + 1,
      prevPage: result.prevPage || (result.page > 1 ? result.page - 1 : 1),
      currentPage: result.page,
      totalPages: result.totalPages,
      name,
      limit,
      errorMessage: null
    });
  } catch (error) {
    console.error('Erro ao buscar estudantes:', error);
    res.status(500).send('Erro interno ao renderizar estudantes');
  }
};

module.exports = { getUsers };
