export default async (context, locale) => {
    return await Promise.resolve({
        goToPage: 'Перейти на сторінку',
        pageAllNews: 'Новини',
        breadCrumbMain: 'Головна',
        pageAllManagement: 'Наш менеджмент',
    })
}