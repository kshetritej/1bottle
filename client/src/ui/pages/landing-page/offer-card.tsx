import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

export default function OfferCard() {
    return (
        <Card className="w-full md:min-h-[200px] bg-[#31B65D] border-none flex flex-col justify-center">
            <CardHeader>
                <CardTitle className="text-white text-2xl">Special Offer</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-green-50">
                    Get 10% off on your first order! Use code:{' '}
                    <span className="bg-white text-[#31B65D] font-bold px-3 py-1 rounded-full">
                        WELCOME10
                    </span>
                </p>
            </CardContent>
        </Card>
    )
}
