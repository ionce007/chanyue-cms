'use strict';
const BaseController = require('./base');
const { success } = require('../../extend/api.js');
const MemberService = require('../../service/api/member.js');
class MemberController extends BaseController {

    constructor(props) {
        super(props);
    }
    // 增
    static async create(req, res, next) {
        try {
            const body = req.body;
            const data = await MemberService.create(body);
            res.json({ ...success, data: data });
        } catch (error) {
            next(error);
        }
    }

    // 删除
    static async delete(req, res, next) {
        try {
            const id = req.query.id;
            const data = await MemberService.delete(id);
            res.json({ ...success, data: data });
        } catch (error) {
            next(error);
        }
    }

    // 改
    static async update(req, res, next) {
        try {
            const body = req.body;
            const data = await MemberService.update(body);
            res.json({ ...success, data: data });
        } catch (error) {
            next(error);
        }
    }

    // 查
    static async find(req, res, next) {
        try {
            const data = await MemberService.find();
            res.json({ ...success, data: data });
        } catch (error) {
            next(error);
        }
    }

    // 查
    static async findId(req, res, next) {
        try {
            const id = req.query.id;
            const data = await MemberService.findId(id);
            res.json({ ...success, data: data });
        } catch (error) {
            next(error);
        }
    }

    // 查子栏目
    static async findSubId(req, res, next) {
        try {
            const id = req.query.id;
            const data = await MemberService.findSubId(id);
            res.json({ ...success, data: data });
        } catch (error) {
            next(error);
        }
    }

    // 搜索栏目
    static async search(req, res, next) {
        try {
            const q = req.query.q;
            const data = await MemberService.search(q);
            res.json({ ...success, data: data });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = MemberController;
