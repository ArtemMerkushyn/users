import User from '../models/User.js';

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const isUsed = await User.findOne({ username });
        if(isUsed) {
            return res.json({ message: 'Даний username вже зайнятий.' });
        }

        const newUser = new User({
            username,
            password,
        });

        await newUser.save();
        return res.json({
            newUser,
            message: 'Реєстрація пройшла успішно.'
        });

    } catch (error) {
        res.json({ message: `Виникла помилка при створенні нового користувача.${error}` });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if(!user) {
            return res.json({ message: 'Такого користувача немає.' });
        }

        // Перевірка пароля
        const isPasswordValid = user.comparePassword(password);
        if (!isPasswordValid) {
            return res.json({ message: 'Ви ввели невірний пароль.' });
        }

        return res.json({
            user,
            message: 'Вітаємо Вас!',
        });
    } catch (error) {
        res.json({ message: 'Ви невірно ввели дані при авторизації.' });
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні користувачів.' });
    }
};