export default async (context, locale) => {
    return await Promise.resolve({
        goToPage: 'Go to page',
        pageAllNews: 'News',
        breadCrumbMain: 'Homepage',
        pageAllManagement: 'Our-management',
    })
}