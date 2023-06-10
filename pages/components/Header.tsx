import React from 'react'

function Header() {
    return (
        <>

            <div className='flex justify-around sm:hidden'>
                <div className='space-y-2'>
                    <div className='flex flex-col items-center'>
                        <div>Total Geral</div>
                        <div>R$ 1.542.420,16</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Total Hectares</div>
                        <div>169,65</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Custo HA</div>
                        <div>R$ 9.091,78</div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='flex flex-col items-center'>
                        <div>Produção por HA</div>
                        <div>23,90</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Produção Total</div>
                        <div>4.054,70</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Custo Produção</div>
                        <div>R$ 380,40</div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around max-sm:hidden'>
                    <div className='flex flex-col items-center'>
                        <div>Total Geral</div>
                        <div>R$ 1.542.420,16</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Total Hectares</div>
                        <div>169,65</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Custo HA</div>
                        <div>R$ 9.091,78</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Produção por HA</div>
                        <div>23,90</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Produção Total</div>
                        <div>4.054,70</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>Custo Produção</div>
                        <div>R$ 380,40</div>
                    </div>
            </div>
        </>

    )
}

export default Header